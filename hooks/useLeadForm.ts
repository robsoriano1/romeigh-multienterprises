import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema, type LeadFormSchema } from '@/lib/validations'
import type { LeadFormResponse } from '@/types'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function useLeadForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [serverResponse, setServerResponse] = useState<LeadFormResponse | null>(null)

  const form = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      companyName: '',
      jobTitle: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: '',
      consent: false,
    },
    mode: 'onBlur', // validate on blur for less aggressive UX
  })

  const onSubmit = async (data: LeadFormSchema) => {
    setSubmitStatus('loading')
    try {
      // TODO: Replace with actual API route — /api/leads
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json: LeadFormResponse = await res.json()

      if (!res.ok) throw new Error(json.message)

      setServerResponse(json)
      setSubmitStatus('success')
      form.reset()
    } catch (err) {
      console.error('[LeadForm] Submission error:', err)
      setSubmitStatus('error')
      setServerResponse({
        success: false,
        message: 'Submission failed. Please try again or contact us directly.',
      })
    }
  }

  const resetStatus = () => {
    setSubmitStatus('idle')
    setServerResponse(null)
  }

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    submitStatus,
    serverResponse,
    resetStatus,
    isLoading: submitStatus === 'loading',
    isSuccess: submitStatus === 'success',
    isError: submitStatus === 'error',
  }
}
