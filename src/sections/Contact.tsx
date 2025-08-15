
import { SITE } from '@/content'
export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="font-serif text-2xl">Contact</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          I’m open to collaborations and research chats. The best way to reach me is email.
        </p>
        <div className="mt-5 flex gap-3">
          <a href={SITE.email} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
            Email me
          </a>
          <a href="#cv" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
