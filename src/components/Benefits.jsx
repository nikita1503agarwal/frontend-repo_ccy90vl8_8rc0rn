import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, BatteryCharging, HeartPulse, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'More Taste',
    text: 'Premium ingredients for smooth, rich flavor.',
    color: 'from-emerald-100 to-emerald-50',
  },
  {
    icon: BatteryCharging,
    title: 'More Energy',
    text: 'Boost your day naturally with 85mg caffeine per serving.',
    color: 'from-lime-100 to-lime-50',
  },
  {
    icon: HeartPulse,
    title: 'More Health',
    text: 'Packed with protein and fiber to support your active lifestyle.',
    color: 'from-sky-100 to-sky-50',
  },
  {
    icon: ShieldCheck,
    title: 'No Added Sugar',
    text: 'Sweetened naturally, zero artificial sugar.',
    color: 'from-rose-100 to-rose-50',
  },
]

export default function Benefits() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900">Why Wise?</h2>
        <p className="text-center text-gray-600 mt-3">Smart nutrition that actually tastes incredible.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group rounded-2xl border border-gray-100 bg-gradient-to-b ${item.color} p-6 shadow-sm hover:shadow-md`}
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-white shadow px-3 py-2">
                <item.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
