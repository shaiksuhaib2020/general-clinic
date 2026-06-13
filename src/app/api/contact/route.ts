import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = contactFormSchema.safeParse(body)

    if (!validated.success) {
      return NextResponse.json(
        { success: false, errors: validated.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // TODO: Integrate EmailJS here
    // const { name, phone, email, treatment, message } = validated.data

    console.log('New consultation request:', validated.data)

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours to confirm your appointment.',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please call us directly.' },
      { status: 500 }
    )
  }
}
