import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX = { name: 200, email: 320, message: 10000 } as const

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'E-mail is niet geconfigureerd op de server. Voeg RESEND_API_KEY toe in Vercel.' },
      { status: 503 }
    )
  }

  let body: { name?: string; email?: string; message?: string; hp?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldige aanvraag' }, { status: 400 })
  }

  const hp = typeof body.hp === 'string' ? body.hp : ''
  if (hp.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || name.length > MAX.name) {
    return NextResponse.json({ error: 'Ongeldige naam' }, { status: 400 })
  }
  if (!email || email.length > MAX.email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 })
  }
  if (!message || message.length < 3 || message.length > MAX.message) {
    return NextResponse.json({ error: 'Ongeldig bericht' }, { status: 400 })
  }

  const to = process.env.CONTACT_TO || 'info@webvysion.tech'
  const from =
    process.env.RESEND_FROM || 'WebVysion <onboarding@resend.dev>'

  const resend = new Resend(process.env.RESEND_API_KEY)
  const subject = `Projectaanvraag: ${name}`

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text: [`Naam: ${name}`, `E-mail: ${email}`, '', message].join('\n'),
    html: `
      <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Bericht:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'E-mail versturen mislukt' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
