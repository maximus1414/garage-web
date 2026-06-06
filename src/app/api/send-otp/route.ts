import { NextResponse } from 'next/server'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const VERIFY_SERVICE_SID = process.env.TWILIO_VERIFY_SID!

export async function POST(request: Request) {
  try {
    const { phone } = await request.json()

    const verification = await client.verify.v2
      .services(VERIFY_SERVICE_SID)
      .verifications.create({
        to: phone,
        channel: 'sms',
      })

    return NextResponse.json({ success: true, status: verification.status })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}