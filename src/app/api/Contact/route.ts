import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export const POST = async (req: NextRequest) => {
  // CORS fejlécek
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*', // Ha pontosítani akarod, akkor írd be a domain(ek)et
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

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
