
import { SITE } from '@/content'
export default function About() {
  return (
    <section id="about" aria-label="About" className="py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="font-serif text-2xl">About</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
          {SITE.about.map((item, i) => (<li key={i}>{item}</li>))}
        </ul>
      </div>
    </section>
  )
}
