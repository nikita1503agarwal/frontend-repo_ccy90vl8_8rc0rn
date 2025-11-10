import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'Wise Matcha Protein',
    thumb: 'emerald',
    cardBg: 'from-emerald-50 to-white',
    accentBg: 'from-emerald-200 to-emerald-400',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
  {
    name: 'Wise Energy Cocoa',
    thumb: 'amber',
    cardBg: 'from-amber-50 to-white',
    accentBg: 'from-amber-200 to-amber-400',
    btn: 'bg-amber-600 hover:bg-amber-700',
  },
  {
    name: 'Wise Vanilla Shake',
    thumb: 'indigo',
    cardBg: 'from-indigo-50 to-white',
    accentBg: 'from-indigo-200 to-indigo-400',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
  },
  {
    name: 'Wise Berry Delight',
    thumb: 'rose',
    cardBg: 'from-rose-50 to-white',
    accentBg: 'from-rose-200 to-rose-400',
    btn: 'bg-rose-600 hover:bg-rose-700',
  },
]

export default function Flavors() {
  return (
    <section id="flavors" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900">Pick Your Flavor</h2>
        <p className="text-center text-gray-600 mt-3">Four vibrant options, all smart choices.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className={`group rounded-2xl border border-gray-100 bg-gradient-to-b ${p.cardBg} p-6 shadow-sm hover:shadow-lg`}
            >
              <div className={`h-40 rounded-xl bg-gradient-to-tr ${p.accentBg} shadow-inner`} />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-600">Clean ingredients. Incredible taste.</p>
              <button className={`mt-4 inline-flex items-center rounded-full px-4 py-2 text-white shadow transition ${p.btn}`}>
                Shop Now
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
