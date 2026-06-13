'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2 } from 'lucide-react'
import { contactFormSchema, ContactFormData } from '@/lib/validations'
import { cn } from '@/lib/utils'

const TREATMENTS = [
  'Hair Transplant',
  'PRP Therapy',
  'Skin Treatment',
  'Beard Transplant',
  'Hair Fall Treatment',
  'Acne Treatment',
  'Pigmentation Treatment',
  'Other',
]

interface AppointmentFormProps {
  compact?: boolean
  className?: string
}

export default function AppointmentForm({ compact = false, className }: AppointmentFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('flex flex-col items-center justify-center py-10 text-center gap-4', className)}>
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-navy">Thank You!</h3>
          <p className="text-gray-500 font-body text-sm mt-1 max-w-xs">
            We&apos;ll call you within 24 hours to confirm your appointment.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-gold text-sm font-body font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full bg-white border rounded-xl px-4 py-3.5 font-body text-sm text-charcoal placeholder:text-gray-400 outline-none transition-all duration-200',
      hasError
        ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-200'
        : 'border-cream-200 focus:border-gold focus:ring-1 focus:ring-gold/30'
    )

  const labelClass = 'block text-xs font-body font-semibold text-navy uppercase tracking-wide mb-1.5'
  const errorClass = 'mt-1 text-xs text-red-500 font-body'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4', className)}>
      {/* Name */}
      <div>
        <label className={labelClass}>Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className={inputClass(!!errors.name)}
          {...register('name')}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number</label>
        <input
          type="tel"
          placeholder="10-digit mobile number"
          className={inputClass(!!errors.phone)}
          {...register('phone')}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Email */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Email Address <span className="text-gray-400 font-normal normal-case">(optional)</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className={inputClass(!!errors.email)}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      )}

      {/* Treatment */}
      <div>
        <label className={labelClass}>Treatment Interested In</label>
        <select
          className={inputClass(!!errors.treatment)}
          defaultValue=""
          {...register('treatment')}
        >
          <option value="" disabled>Select a treatment</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.treatment && <p className={errorClass}>{errors.treatment.message}</p>}
      </div>

      {/* Message */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Message <span className="text-gray-400 font-normal normal-case">(optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your concern..."
            className={cn(inputClass(!!errors.message), 'resize-none')}
            {...register('message')}
          />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>
      )}

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-gold text-navy font-body font-semibold rounded-xl py-3.5 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Book Free Consultation →'
          )}
        </button>

        {status === 'error' && (
          <p className="mt-2 text-center text-xs text-red-500 font-body">
            Something went wrong. Please call us directly.
          </p>
        )}

        <p className="mt-3 text-center text-xs text-gray-400 font-body">
          🔒 100% Secure · No Spam · Quick Response
        </p>
      </div>
    </form>
  )
}
