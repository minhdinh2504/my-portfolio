'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { validateEmailWithMailboxLayer, sendContactEmail } from "@/lib/email"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const isValid = await validateEmailWithMailboxLayer(formData.email)

    if (!isValid) {
      toast.error('Please enter a valid email address.')
      setLoading(false)
      return
    }

    try {
      await sendContactEmail(formData)
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      toast.error('There was an error sending your message.')
    }

    setLoading(false)
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="resize-none"
            />
          </div>
          <div className="pt-2">
            <Button
              type="submit"
              className="mx-auto block w-1/2 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
