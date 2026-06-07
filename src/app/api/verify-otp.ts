import type { VercelRequest, VercelResponse } from '@vercel/node'
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { phone, code } = req.body

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID!)
      .verificationChecks.create({
        to: phone,
        code,
      })

    if (verificationCheck.status === 'approved') {
      return res.status(200).json({ success: true })
    } else {
      return res.status(400).json({ success: false, error: 'Invalid code' })
    }
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message })
  }
}