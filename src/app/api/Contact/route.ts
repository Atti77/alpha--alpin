import { NextRequest, NextResponse } from 'next/server'
import { NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export const POST = async (req: NextRequest, res: NextApiResponse) => {

  // CORS fejlécek beállítása
  res.setHeader('Access-Control-Allow-Origin', 'https://www.alpha-alpin.hu'); // Csak a www-t engedélyezd
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Engedélyezett HTTP metódusok
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Ha preflight (OPTIONS kérés), válaszolj 200-as státusszal és fejezd be
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { name, email, phone, message } = await req.json()

  

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Új kapcsolatfelvétel érkezett az oldalról! ${name}`,
      text: `Név: ${name}\nEmail: ${email}\nTelefonszám: ${phone}\nMessage: ${message}`,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}