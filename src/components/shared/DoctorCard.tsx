import { CheckCircle } from 'lucide-react'
import { DOCTOR } from '@/data/clinic'

export default function DoctorCard() {
  return (
    <div className="bg-white rounded-3xl shadow-large p-8 md:p-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Doctor image placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-navy-200 to-navy-700 flex-shrink-0 flex items-center justify-center border-2 border-gold/30">
          <span className="text-white/40 text-5xl font-heading font-bold">AP</span>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-heading font-bold text-display-sm text-navy">{DOCTOR.name}</h3>
          <p className="text-gold font-body font-semibold mt-1">{DOCTOR.credentials}</p>
          <p className="text-gray-500 text-sm font-body mt-1">{DOCTOR.title}</p>

          {/* Memberships */}
          <div className="flex flex-wrap gap-2 mt-4">
            {DOCTOR.memberships.map((m) => (
              <span key={m} className="text-xs font-body font-semibold px-3 py-1 rounded-full border border-navy/20 text-navy bg-navy/5">
                {m}
              </span>
            ))}
          </div>

          {/* Specialties */}
          <ul className="mt-5 space-y-2">
            {DOCTOR.specialties.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm font-body text-gray-600">
                <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
