import { useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save to localStorage as a lightweight client-only record
    try {
      const existing = JSON.parse(localStorage.getItem('contact-messages') || '[]');
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('contact-messages', JSON.stringify(existing));
    } catch (err: any) {
      // ignore
    }
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s talk talent"
          description="Hiring a leader? Scaling a team? Just want to swap ideas about the future of work? Drop me a note."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <a href={`mailto:${profile.email}`} className="font-medium text-ink hover:text-brand">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <div className="font-medium text-ink">{profile.phone}</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand flex items-center justify-center flex-shrink-0">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">LinkedIn</div>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-brand">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Based in</div>
                  <div className="font-medium text-ink">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-brand mx-auto" />
                <h3 className="text-xl font-bold text-ink mt-4">Thanks for reaching out!</h3>
                <p className="text-slate-600 mt-2">I&apos;ll get back to you within 1–2 business days.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-brand font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                    placeholder="Where do you work?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition resize-none"
                    placeholder="Tell me about your hiring goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-brand text-white font-medium hover:bg-brand-dark transition"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
