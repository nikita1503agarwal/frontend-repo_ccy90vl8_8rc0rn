import React from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Flavors from './components/Flavors'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Wise <span className="text-emerald-600">Nutrition</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-emerald-600">About</a>
            <a href="#flavors" className="hover:text-emerald-600">Shop</a>
            <a href="#" className="hover:text-emerald-600">Contact</a>
          </nav>
          <a href="#flavors" className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-white text-sm shadow hover:bg-emerald-700">Shop Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Benefits />
        <Flavors />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

export default App
