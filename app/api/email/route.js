import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, name, message, phone } = await request.json();

  const transport = nodemailer.createTransport({
    host: "server932328.nazwa.pl",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: process.env.MY_EMAIL,
      to: "olkowski.daniel@gmail.com",
      subject: `Message from ${name} (${email})`,
      text: `${message}. Numer telefonu: ${phone}`,
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
