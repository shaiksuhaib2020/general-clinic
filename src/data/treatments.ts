export interface Treatment {
  slug: string
  title: string
  shortDesc: string
  icon: string
  category: 'hair' | 'skin'
  heroTitle: string
  heroSubtitle: string
  whatIsIt: string
  whoIsItFor: string
  benefits: string[]
  procedure: string[]
  recovery: string
  faqs: { q: string; a: string }[]
}

export const TREATMENTS: Treatment[] = [
  {
    slug: 'hair-transplant',
    title: 'Hair Transplant',
    shortDesc: '100% doctor-led FUE with 95–98% graft survival rate. Permanent, natural results.',
    icon: 'Scissors',
    category: 'hair',
    heroTitle: 'Advanced Hair Transplant in Hyderabad',
    heroSubtitle: 'Patented UFME extraction + DSHI implantation. Doctor-led. Permanent results.',
    whatIsIt: 'Hair transplant is a minimally invasive surgical procedure where healthy hair follicles are extracted from a donor zone (typically the back of the head) and implanted into areas of thinning or baldness. At Assure Clinic, we use our patented Ultra-Fine Micro Extraction (UFME) technique with 0.6–0.8mm punches for maximum graft survival.',
    whoIsItFor: 'Patients at Norwood Scale Grade 2 through 7 experiencing male or female pattern baldness, receding hairline, thinning crown, or those who had a previous failed transplant.',
    benefits: [
      'Permanent, lifelong results — donor hair is genetically resistant to balding',
      '95–98% graft survival rate (industry average is 70–85%)',
      'No visible scarring with Micro FUE technique',
      'Natural hairline design tailored to your facial structure',
      'Return to work in 2–3 days',
      '12-month follow-up care included in every package',
    ],
    procedure: [
      'Free consultation: scalp analysis, Norwood grading, graft estimate',
      'Pre-procedure preparation and donor zone design by your doctor',
      'Local anaesthesia — procedure is completely painless',
      'UFME extraction of follicular units (short sessions over 2–3 days)',
      'DSHI (Direct Slit Hair Implantation) for maximum density and natural angle',
      'Post-procedure care kit and medication prescribed',
      'Follow-up at 1 week, 1 month, 3 months, 6 months, and 12 months',
    ],
    recovery: 'Return to office work in 2–3 days. Initial redness fades in 7–10 days. Transplanted hair sheds at 4–6 weeks (normal). New growth begins at 3–4 months. Full, dense results visible at 12–18 months.',
    faqs: [
      { q: 'Is hair transplant permanent?', a: 'Yes. Transplanted follicles from the safe donor zone are genetically resistant to DHT (the hormone that causes balding), so they continue growing for a lifetime.' },
      { q: 'How many grafts will I need?', a: 'Norwood 2–3: 1,500–2,500 grafts. Norwood 4–5: 2,500–4,000 grafts. Norwood 6–7: 4,000–6,000+ grafts. Your doctor determines the exact number during the free consultation.' },
      { q: 'Is the procedure painful?', a: 'No. Local anaesthesia is administered before extraction and implantation. Most patients report mild discomfort at most and watch movies or listen to music during the procedure.' },
      { q: 'What is the cost of hair transplant in Hyderabad?', a: 'Cost is personalised based on your Norwood grade, technique, and graft count. Assure Clinic offers transparent pricing with no hidden charges and 0% EMI options. Book a free consultation for your exact quote.' },
    ],
  },
  {
    slug: 'prp-therapy',
    title: 'PRP Therapy',
    shortDesc: 'Platelet-Rich Plasma therapy to stimulate hair growth and slow hair fall.',
    icon: 'Droplets',
    category: 'hair',
    heroTitle: 'PRP Hair Treatment in Hyderabad',
    heroSubtitle: "Harness your body's own growth factors to regrow thicker, healthier hair.",
    whatIsIt: "PRP (Platelet-Rich Plasma) therapy involves drawing a small amount of the patient's blood, concentrating the platelets through centrifugation, and injecting the growth-factor-rich plasma directly into the scalp. This stimulates dormant hair follicles and promotes new hair growth.",
    whoIsItFor: 'Patients experiencing early-to-moderate hair thinning, those wanting to maintain results post-transplant, or individuals not yet ready for surgery.',
    benefits: [
      'Stimulates dormant hair follicles naturally',
      'Reduces hair fall within 2–3 sessions',
      'Improves hair density and thickness',
      'Uses your own blood — zero risk of rejection or allergy',
      'No downtime — return to work immediately',
      'Highly effective when combined with hair transplant',
    ],
    procedure: [
      'Blood draw (10–20 ml) from your arm',
      'Centrifugation to isolate platelet-rich plasma',
      'Local anaesthetic cream applied to scalp',
      'PRP injected into targeted scalp areas using fine needles',
      'Session duration: 45–60 minutes',
      'Recommended protocol: 4–6 sessions, 3–4 weeks apart',
    ],
    recovery: 'No downtime. Mild scalp tenderness for 24–48 hours. Avoid washing hair for 24 hours post-session. Results visible from session 3 onwards.',
    faqs: [
      { q: 'How many PRP sessions are required?', a: '4–6 sessions spaced 3–4 weeks apart is the standard protocol. Maintenance sessions every 4–6 months are recommended to sustain results.' },
      { q: 'Is PRP therapy painful?', a: 'An anaesthetic cream is applied beforehand. Most patients describe the sensation as a mild prickling — very tolerable. The procedure takes under an hour.' },
      { q: 'Can PRP be combined with hair transplant?', a: "Yes — and it's recommended. PRP before transplant strengthens donor follicles; PRP post-transplant accelerates healing and boosts graft survival." },
    ],
  },
  {
    slug: 'skin-treatments',
    title: 'Skin Treatments',
    shortDesc: 'Acne, pigmentation, anti-aging, laser, and chemical peels — by expert dermatologists.',
    icon: 'Sparkles',
    category: 'skin',
    heroTitle: 'Advanced Skin Treatments in Hyderabad',
    heroSubtitle: 'Board-certified dermatologists. Medical-grade technology. Visible results.',
    whatIsIt: 'Assure Clinic offers a full range of medical dermatology and cosmetic skin treatments — from acne and acne scar management to pigmentation correction, chemical peels, laser treatments, anti-aging injectables, and skin rejuvenation therapies.',
    whoIsItFor: 'Anyone experiencing acne, acne scars, uneven skin tone, pigmentation, signs of aging, or those seeking preventive skincare with medical-grade solutions.',
    benefits: [
      'Personalised skin analysis and treatment plan',
      'Medical-grade peels and laser technologies',
      'Visible improvement from the first session',
      'Safe for Indian and South Asian skin tones',
      'Combination protocols for faster results',
      'Post-treatment skincare guidance included',
    ],
    procedure: [
      'Skin consultation and Fitzpatrick skin type assessment',
      'Customised protocol recommended by dermatologist',
      'Treatment session (duration varies by modality)',
      'Post-treatment care and product recommendations',
      'Follow-up as per protocol',
    ],
    recovery: 'Varies by treatment. Chemical peels: 3–5 day downtime. Laser: 1–3 days mild redness. Injectables: immediate. All aftercare instructions provided by your doctor.',
    faqs: [
      { q: 'How many sessions does acne treatment take?', a: 'Typically 6–8 sessions for significant improvement, with maintenance sessions. Results vary based on severity and skin type.' },
      { q: 'Is laser treatment safe for darker skin tones?', a: 'Yes. Our dermatologists are experienced with South Asian skin tones and use appropriate laser wavelengths (Nd:YAG, diode) that are safe for Fitzpatrick types IV–VI.' },
      { q: 'What is the minimum age for skin treatments?', a: 'Most cosmetic treatments are suitable from age 18. For minors with medical conditions like severe acne, parental consent is required.' },
    ],
  },
]
