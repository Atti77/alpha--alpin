import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

// Email küldő konfiguráció
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or your specific domain
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Ellenőrizd, hogy a kötelező mezők meg vannak-e adva
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Hiányzó adatok, adja meg az összes kötelező adatot" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email konfiguráció hiányzik");
    }

    // Email küldése
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Új kapcsolatfelvételi űrlap kitöltés",
        html: `
          <h2>Új üzenet érkezett a weboldalról</h2>
          <p><strong>Név:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Nem adott meg"}</p>
          <p><strong>Üzenet:</strong> ${message || "Nem adott meg"}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email küldési hiba:", emailError);
      throw new Error("Email küldési hiba történt");
    }

    return NextResponse.json(
      { message: "Sikeresen elküldve!" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", 
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("API hiba:", error);
    return NextResponse.json(
      { error: "Hiba az adatok beküldése közben" },
      { status: 500 }
    );
  }
};
