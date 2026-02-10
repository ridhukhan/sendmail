// controller/send.js
import { createTransport } from "nodemailer";

const transport = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendmail = async (req, res) => {
  const { subject, email, text } = req.body;
  try {
    const info = await transport.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject,
      text,
    });
    console.log("Mail sent:", info.messageId)
    res.status(200).json({ message: "Mail sent successfully!" });
  } catch (err) {
    console.log("Mail error:", err); // ✅ check console logs
    res.status(500).json({ message: "Mail sending failed", error: err.message });
  }
};
