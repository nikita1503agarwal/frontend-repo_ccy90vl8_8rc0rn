import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah L.',
    text: 'Best protein shake ever! Tastes amazing and gives me energy.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'James K.',
    text: 'Perfect blend of flavor and health. I take it every morning.',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    name: 'Ava R.',
    text: 'Clean ingredients and no sugar crash. So good!',
    avatar: 'https://i.pravatar.cc/100?img=30',
  },
  {
    name: 'Marcus D.',
    text: 'The matcha is legit. Smooth, not bitter. Love it after workouts.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900">Loved by Our Customers</h2>
        <p className="text-center text-gray-600 mt-3">Real stories from real people.</p>

        <div className="mt-12 overflow-x-auto">
          <div className="flex gap-6 min-w-max pr-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="w-[320px] shrink-0 rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <div className="flex text-amber-500">{'★★★★★'}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">“{t.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
