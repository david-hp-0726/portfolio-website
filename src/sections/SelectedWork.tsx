
import { SITE } from '@/content'
export default function SelectedWork() {
  const items = SITE.selectedWork
  return (
    <section id="research" aria-label="Selected work" className="py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl">Selected Work</h2>
          <a href="#publications" className="text-sm text-brand-700 hover:underline">See publications</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="rounded-2xl border border-slate-200 p-5 hover:shadow-subtle transition-shadow">
              <h3 className="font-medium">
                <a href={it.link} className="hover:underline">{it.title}</a>
              </h3>
              <p className="text-sm text-slate-500 mt-1">{it.year}</p>
              <p className="mt-2 text-slate-700">{it.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
