import type { NextApiRequest, NextApiResponse } from 'next'
import { leadFormSchema } from '@/lib/validations'
import type { LeadFormResponse } from '@/types'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeadFormResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  // 1. Parse and validate with Zod
  const parsed = leadFormSchema.safeParse(req.body)

  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? 'Validation failed'
    return res.status(400).json({ success: false, message: firstError })
  }

  const data = parsed.data

  try {
    // 2. Persist to Database (Optional: Keep your DB logic here)
    // await db.leads.create({ data })

    // 3. Send notification email via Resend
    // We use Promise.all to run Email and CRM requests in parallel to speed up response time
    const emailPromise = resend.emails.send({
      from: 'Romeigh Multi-Enterprises Leads <onboarding@resend.dev>', // Replace with verified domain in production
      to: ['robsoriano177@gmail.com'],
      subject: `New Lead: ${data.companyName} — ${data.service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0a1f44; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Compliance Audit Request</h1>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Submitted via romeigh.com</p>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 24px;">

            <h2 style="font-size: 15px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 8px 0; width: 40%; color: #6b7280; font-size: 13px;">Company</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${data.companyName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Job Title / Position</td>
                <td style="padding: 8px 0; font-size: 14px;">${data.jobTitle}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #0ea5e9;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 8px 0; font-size: 14px;">${data.phone}</td>
              </tr>
            </table>

            <h2 style="font-size: 15px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 16px;">Service Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 8px 0; width: 40%; color: #6b7280; font-size: 13px;">Service Needed</td>
                <td style="padding: 8px 0; font-size: 14px;"><strong>${data.service}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Facility Location</td>
                <td style="padding: 8px 0; font-size: 14px;">${data.location}</td>
              </tr>
            </table>

            <h2 style="font-size: 15px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Message / Compliance Concern</h2>
            <div style="background: #f9fafb; border-left: 3px solid #0ea5e9; padding: 12px 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #374151;">
              ${data.message}
            </div>

            <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af;">
              Submitted at ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })} PHT
            </p>
          </div>
        </body>
        </html>
      `
    })

    // 4. Push to HubSpot CRM via Fetch API
    const hubspotPromise = fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: {
          company: data.companyName,
          jobtitle: data.jobTitle,
          email: data.email,
          phone: data.phone,
          city: data.location,
          message: `Service: ${data.service}\n\n${data.message}`,
        }
      })
    })

    // Execute both external API calls simultaneously
    const [emailResult, hubspotResult] = await Promise.all([emailPromise, hubspotPromise])

    if (emailResult.error) {
      console.warn('[API /leads] Resend issue:', emailResult.error)
    }

    // Optional: Log non-fatal CRM errors so the user still gets a success message if HubSpot fails
    if (!hubspotResult.ok) {
      console.warn('[API /leads] HubSpot issue:', await hubspotResult.text())
    }

    console.info('[API /leads] New lead processed:', {
      company: data.companyName,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({
      success: true,
      message: 'Your request has been received. We will contact you within 24 hours.',
      referenceId: `RME-${Date.now().toString(36).toUpperCase()}`,
    })
    
  } catch (err) {
    console.error('[API /leads] Error processing lead:', err)
    return res.status(500).json({
      success: false,
      message: 'An internal error occurred. Please try again or email us directly.',
    })
  }
}