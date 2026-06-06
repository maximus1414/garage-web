import { NextResponse } from 'next/server'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

const VERIFY_SERVICE_SID = process.env.TWILIO_VERIFY_SID!

export async function POST(request: Request) {
  try {
    const { phone, code } = await request.json()

    const verificationCheck = await client.verify.v2
      .services(VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: phone,
        code,
      })

    if (verificationCheck.status === 'approved') {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid code' },
        { status: 400 }
      )
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    )
  }
}