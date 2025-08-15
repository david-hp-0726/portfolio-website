
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {year} David Chen</p>
        <p className="text-slate-500">Last updated: Aug 2025</p>
      </div>
    </footer>
  )
}
