
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import QuickLinks from '@/sections/QuickLinks'
import About from '@/sections/About'
import SelectedWork from '@/sections/SelectedWork'
import Contact from '@/sections/Contact'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        {/* <SelectedWork /> */}
        {/* <section id="publications" className="py-14">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="font-serif text-2xl">Publications</h2>
            <p className="mt-2 text-slate-600">Coming soon.</p>
          </div>
        </section> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
