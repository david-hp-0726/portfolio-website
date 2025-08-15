
import { SITE } from '@/content'
import SocialLinks from '@/components/SocialLinks'

export default function Hero() {
  return (
    <section id="top" aria-label="Intro" className="pt-24 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-[1fr,1.2fr] gap-10 items-center">
        <div className="justify-self-center">
          <img
            src={SITE.headshot}
            alt={`Portrait of ${SITE.name}`}
            width={400}
            height={400}
            className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl border border-slate-200 shadow-subtle"
          />
        </div>
        <div>
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight">{SITE.name}</h1>
          <p className="mt-1 text-lg text-slate-700">{SITE.role}</p>
          <p className="mt-4 prose">{SITE.intro}</p>
        </div>
      </div>
    </section>
  )
}
