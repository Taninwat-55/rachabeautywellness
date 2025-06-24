import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another provider
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_RECEIVER, 
      subject: 'Ny besked fra Racha hjemmeside',
      html: `
        <h2>Ny besked fra kontaktformularen</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Besked:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Besked sendt!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Noget gik galt med at sende beskeden.' });
  }
});

export default router;
