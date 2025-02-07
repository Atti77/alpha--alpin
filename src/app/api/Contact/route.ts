import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  const method = req.method.toUpperCase(); 

  // CORS beállítások – mindkét domain verzió engedélyezése
  const allowedOrigins = ['https://alpha-alpin.hu', 'https://www.alpha-alpin.hu'];
  const origin = req.headers.get('origin') || '';

  const headers = new Headers({
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  // Ha OPTIONS kérés, azonnal válaszoljunk
  if (method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers });
  }

  if (method !== 'POST') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Új kapcsolatfelvétel érkezett az oldalról! - ${name}`,
      text: `Név: ${name}\nEmail: ${email}\nTelefonszám: ${phone}\nÜzenet: ${message}`,
    });

    return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }), { status: 200, headers });
  } catch (error) {
    console.error('Email küldési hiba:', error);
    return new NextResponse(JSON.stringify({ message: 'Error sending email' }), { status: 500, headers });
  }
};
