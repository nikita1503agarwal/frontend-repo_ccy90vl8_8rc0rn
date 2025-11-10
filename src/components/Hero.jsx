import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section ref={ref} className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-28 md:pt-36 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div style={{ y, opacity, scale }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-emerald-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Interactive 3D Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Matcha Meets Protein
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            Wise Matcha Protein blends premium matcha with plant-based protein for a clean, energetic boost.
          </p>
          <p className="text-emerald-700 font-medium">Fuel your day the Wise way.</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#flavors" className="group inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
              Shop Now
              <svg className="ml-2 h-5 w-5 transition -translate-x-0.5 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <span className="text-sm text-gray-600">Clean. Plant-based. Delicious.</span>
          </div>
        </motion.div>

        <div className="relative h-[380px] md:h-[520px] lg:h-[600px]">
          {/* Empty column to let the Spline breathe and create depth */}
        </div>
      </div>
    </section>
  )
}
