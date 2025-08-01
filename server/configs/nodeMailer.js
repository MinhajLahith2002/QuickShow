import nodemailer from 'nodemailer';

// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({to, subject, body}) => {
    const response = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        html: body,
    })
    console.log("Sending from:", process.env.SENDER_EMAIL);
    return response
}

export default sendEmail;