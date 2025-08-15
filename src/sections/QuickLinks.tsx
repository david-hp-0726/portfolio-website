
import SocialLinks from '@/components/SocialLinks'
export default function QuickLinks() {
  return (
    <section aria-label="Quick links" className="mt-8 border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-slate-600">Find me online</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
