import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, company, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return res.status(500).json({ ok: false, error: 'SMTP credentials are not configured' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  })

  const to = process.env.CONTACT_TO_EMAIL || 'info.werrex@gmail.com'
  const subject = `New contact from ${name} — ${service || 'General Inquiry'}`
  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nService: ${service || '-'}\n\nMessage:\n${message}`
  const html = `<p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || '-'}</p>
    <p><strong>Service:</strong> ${service || '-'}</p>
    <hr />
    <p>${message.replace(/\n/g, '<br/>')}</p>`

  try {
    await transporter.sendMail({
      from: `${user}`,
      to,
      subject,
      text,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
}
