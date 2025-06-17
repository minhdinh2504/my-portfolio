import emailjs from '@emailjs/browser'

export async function validateEmailWithMailboxLayer(email: string): Promise<boolean> {
  try {
    const res = await fetch(`https://apilayer.net/api/check?access_key=24a3a303a5d5505e717ead956638a8b2&email=${email}`)
    const data = await res.json()
    return data.format_valid && data.smtp_check
  } catch (err) {
    console.error("Email validation error:", err)
    return false
  }
}

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}): Promise<void> {
  await emailjs.send(
    'service_minhdq2543',
    'template_eyeyj7p',
    { name, email, message },
    'ACv2AuWHJaq70MK_0'
  )
}
