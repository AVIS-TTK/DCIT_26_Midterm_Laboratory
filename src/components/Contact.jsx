import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Name is required.'
    if (!form.email.trim()) err.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) err.message = 'Message must be at least 10 characters.'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const input = 'w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'

  return (
    <section id="contact" className="bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold">Contact</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-3 text-slate-600">
            <p>📧 <a href="mailto:ivandiaday@email.com" className="text-indigo-600 hover:underline">ivandiaday@email.com</a></p>
            <p>💻 <a href="https://github.com/AVIS-TTK" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">GitHub</a></p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={input} />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" className={input} />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Your message" className={input} />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white transition hover:bg-indigo-700">
              Send Message
            </button>
            {sent && <p className="rounded bg-green-100 p-3 text-green-700">✅ Message sent! Thanks for reaching out.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
