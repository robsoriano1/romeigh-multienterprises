import { useLeadForm } from '@/hooks/useLeadForm'
import { SERVICE_OPTIONS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function LeadForm() {
  const { form, onSubmit, isLoading, isSuccess, isError, serverResponse } = useLeadForm()
  const { register, formState: { errors } } = form

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-xl mb-2">Request Received</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          {serverResponse?.message}
        </p>
        {serverResponse?.referenceId && (
          <p className="text-xs text-gray-400 font-mono">
            Ref: {serverResponse.referenceId}
          </p>
        )}
        <p className="text-xs text-gray-400 mt-4">
          A ROMEIGH specialist will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="font-display font-bold text-navy text-[1.3rem] mb-1">
        Request a Free Compliance Audit
      </h3>
      <p className="text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
        All fields are required for proper triage. We do not share your data with third parties.
      </p>

      <form onSubmit={onSubmit} noValidate aria-label="Compliance audit request form">

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="companyName" className="field-label">Company Name</label>
            <input
              id="companyName"
              type="text"
              placeholder="e.g. Acme Manufacturing Inc."
              className={cn('field-input', errors.companyName && 'border-danger focus:border-danger')}
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? 'companyName-error' : undefined}
              {...register('companyName')}
            />
            {errors.companyName && (
              <span id="companyName-error" className="field-error" role="alert">
                {errors.companyName.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="jobTitle" className="field-label">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              placeholder="e.g. Plant Manager / EHS Officer"
              className={cn('field-input', errors.jobTitle && 'border-danger')}
              aria-invalid={!!errors.jobTitle}
              {...register('jobTitle')}
            />
            {errors.jobTitle && (
              <span className="field-error" role="alert">{errors.jobTitle.message}</span>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="field-label">Work Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className={cn('field-input', errors.email && 'border-danger')}
              aria-invalid={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <span className="field-error" role="alert">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="field-label">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+63 XXX XXX XXXX"
              className={cn('field-input', errors.phone && 'border-danger')}
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
            {errors.phone && (
              <span className="field-error" role="alert">{errors.phone.message}</span>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="service" className="field-label">Primary Service Needed</label>
            <select
              id="service"
              className={cn('field-input', errors.service && 'border-danger')}
              aria-invalid={!!errors.service}
              {...register('service')}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {errors.service && (
              <span className="field-error" role="alert">{errors.service.message}</span>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="field-label">Facility Location</label>
          <input
            id="location"
            type="text"
            placeholder="City / Province, Philippines"
            className={cn('field-input', errors.location && 'border-danger')}
            aria-invalid={!!errors.location}
            {...register('location')}
          />
          {errors.location && (
            <span className="field-error" role="alert">{errors.location.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="field-label">Message / Compliance Concern</label>
          <textarea
            id="message"
            rows={3}
            placeholder="Briefly describe your current setup, existing challenges, or upcoming regulatory audit timeline…"
            className={cn('field-input', errors.message && 'border-danger')}
            aria-invalid={!!errors.message}
            {...register('message')}
          />
          {errors.message && (
            <span className="field-error" role="alert">{errors.message.message}</span>
          )}
        </div>

        {/* Consent */}
        <div className="mb-5 flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-0.5 accent-sky-500 w-4 h-4 flex-shrink-0 cursor-pointer"
            {...register('consent')}
          />
          <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed cursor-pointer">
            I agree to be contacted by ROMEIGH Multi-Enterprises regarding this inquiry.
            We handle your data in accordance with the Philippine Data Privacy Act (RA 10173).
          </label>
        </div>
        {errors.consent && (
          <span className="field-error -mt-3 mb-4 block" role="alert">{errors.consent.message}</span>
        )}

        {/* Server error */}
        {isError && serverResponse && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700" role="alert">
            {serverResponse.message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-[15px] tracking-wide py-3.5 rounded transition-colors duration-200 active:scale-[0.98]"
        >
          {isLoading ? 'Submitting…' : 'Submit Compliance Triage Request →'}
        </button>

        {/* Trust note */}
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-gray-300 mt-3">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Your information is encrypted and confidential.
        </p>

      </form>
    </div>
  )
}
