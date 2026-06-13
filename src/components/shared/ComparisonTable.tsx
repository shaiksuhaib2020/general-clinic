import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Who performs surgery?', assure: '100% Doctors Only', others: 'Technicians/Nurses', assureGood: true },
  { feature: 'Technique', assure: 'Advanced Micro FUE', others: 'Basic FUE/FUT', assureGood: true },
  { feature: 'Graft Survival Rate', assure: '95–98%', others: '70–85%', assureGood: true },
  { feature: 'Hairline Design', assure: 'Custom by Doctor', others: 'Template Based', assureGood: true },
  { feature: 'Hidden Charges', assure: 'None', others: 'Common', assureGood: true },
  { feature: 'Post-Surgery Support', assure: 'Dedicated Care', others: 'Limited/Paid', assureGood: true },
]

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cream-200 shadow-soft">
      <table className="w-full min-w-[520px]">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-sm font-body font-semibold text-gray-400 bg-cream-100 rounded-tl-2xl">
              Feature
            </th>
            <th className="px-6 py-4 text-center bg-navy text-sm font-body font-bold text-white">
              <span className="text-gold">Assure Clinic</span>
            </th>
            <th className="px-6 py-4 text-center bg-gray-100 text-sm font-body font-semibold text-gray-500 rounded-tr-2xl">
              Other Clinics
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-100/50'}>
              <td className="px-6 py-4 text-sm font-body font-medium text-navy border-b border-cream-200">
                {row.feature}
              </td>
              <td className="px-6 py-4 text-center border-b border-cream-200 bg-navy/5">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-sm font-body font-semibold text-gold">{row.assure}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-center border-b border-cream-200">
                <div className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm font-body text-gray-400">{row.others}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
