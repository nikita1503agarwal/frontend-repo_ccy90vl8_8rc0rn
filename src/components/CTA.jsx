import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Truck, CreditCard, Instagram, Twitter, Facebook } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold">Don’t just crave it. Get it.</h2>
          <p className="mt-4 text-emerald-50">Order today with fast shipping and secure checkout.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <ShieldCheck className="h-4 w-4" /> 30-Day Guarantee
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <Truck className="h-4 w-4" /> Free Shipping $50+
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <CreditCard className="h-4 w-4" /> Secure Payments
            </span>
          </div>
          <a href="#flavors" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-emerald-700 font-semibold shadow-lg hover:shadow-xl transition">
            Shop Now
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold">Wise Nutrition</h3>
            <p className="mt-2 text-emerald-100">Clean, modern nutrition that keeps up with your life.</p>
          </div>
          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-emerald-100">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#flavors" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow</h3>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Twitter"><Twitter className="h-5 w-5"/></a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Facebook"><Facebook className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-emerald-100 text-sm">© {new Date().getFullYear()} Wise Nutrition. All rights reserved.</p>
      </div>
    </section>
  )
}
