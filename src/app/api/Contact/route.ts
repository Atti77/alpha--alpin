import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Új kapcsolatfelvétel - ${name}`,
      text: `
        Név: ${name}
        Email: ${email}
        Telefon: ${phone}
        Üzenet: ${message}
      `,
    })

    res.status(200).json({ message: 'Email sikeresen elküldve' })
  } catch (error) {
    console.error('Email küldési hiba:', error)
    res.status(500).json({ message: 'Hiba történt az email küldése során' })
  }
}
