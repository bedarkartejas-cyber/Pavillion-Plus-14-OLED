'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

/**
 * HP PAVILION PLUS 14 OLED - PERFORMANCE MONOLITH
 * Aesthetic: Studio Zero, Surgical Precision, Silk Titanium.
 */

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2400" className="w-full h-full object-cover opacity-60" alt="Hardware Hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <p className="text-[10px] font-black tracking-[0.5em] text-[#0071E3] uppercase mb-6">Next Gen Computing</p>
          <h1 className="text-[clamp(3.5rem,7vw,8.5rem)] font-bold tracking-tightest leading-[0.9] text-white">Extreme capability.<br />Absolute silence.</h1>
          <p className="mt-6 text-lg text-white/70 font-medium max-w-xl mx-auto">Designed for creators, engineered for endurance.</p>
        </motion.div>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-12 px-10 py-4 bg-white text-black text-[13px] font-bold uppercase tracking-widest rounded-full shadow-2xl transition-all">Discover More</motion.button>
      </motion.div>
    </section>
  )
}

const ArchitectureSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), { stiffness: 45, damping: 30 })
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1550px] px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-[48px] overflow-hidden bg-[#F5F5F7] border border-black/[0.03]">
          <motion.img src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f4?q=80&w=2400" style={{ scale: imageScale }} className="w-full h-full object-cover saturate-[0.2] contrast-[1.1] opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div style={{ y }} className="bg-white/10 backdrop-blur-3xl px-16 py-12 rounded-[40px] border border-white/20 shadow-2xl text-center">
              <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#1D1D1F]/40 block mb-4">Lithography</span>
              <span className="text-8xl font-bold text-[#1D1D1F] tracking-tightest leading-none">3<span className="text-4xl align-top">nm</span></span>
            </motion.div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#86868B]">Architecture</span>
            </div>
            <h2 className="text-[clamp(3rem,5vw,5rem)] font-bold tracking-tightest leading-[0.95] text-[#1D1D1F]">Silicon, <br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#86868B] to-[#D2D2D7]">perfected.</span></h2>
            <p className="text-lg font-medium text-[#424245] leading-relaxed max-w-md">A masterclass in efficiency. The M4 chip redefined for sustained pro-performance without a whisper of sound.</p>
          </div>
          <button className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.4em] text-[#0066CC]">
            Explore Tech Specs <span className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-all">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

const PerformanceMetrics = () => {
  const metrics = [
    { label: 'CPU', value: 95, detail: 'Next-gen Multi-core' },
    { label: 'GPU', value: 88, detail: 'Hardware Ray Tracing' },
    { label: 'NPU', value: 92, detail: 'Neural Intelligence' },
    { label: 'Watt', value: 97, detail: 'Silent Architecture' },
  ]

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-[40px] bg-[#F5F5F7] border border-black/[0.02] flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="56" cy="56" r="50" className="stroke-black/[0.05]" strokeWidth="3" fill="transparent" />
                  <motion.circle cx="56" cy="56" r="50" stroke="#0071E3" strokeWidth="3" strokeDasharray="314" initial={{ strokeDashoffset: 314 }} whileInView={{ strokeDashoffset: 314 - (314 * metric.value) / 100 }} transition={{ duration: 2, ease: "circOut" }} strokeLinecap="round" fill="transparent" />
                </svg>
                <span className="absolute text-2xl font-bold text-[#1D1D1F] tracking-tighter">{metric.value}%</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1D1D1F] mb-1">{metric.label}</h4>
              <p className="text-[9px] font-bold text-[#86868B] uppercase tracking-widest">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BatterySection = () => {
  return (
    <section className="relative py-24 lg:pb-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-10">
        <div className="relative w-full bg-[#010101] rounded-[56px] p-12 lg:p-20 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0071E3]/10 blur-[120px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#0071E3] uppercase tracking-[0.5em]">Endurance Protocol</span>
                <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tightest leading-none">Up to 16 hours.</h2>
              </div>
              <div className="space-y-6">
                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 2 }} className="h-full bg-[#0071E3] shadow-[0_0_15px_#0071E3]" />
                </div>
                <p className="text-sm text-white/40 font-medium tracking-wide italic">* Industry leading runtime based on Titan Labs 2026 Verification.</p>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="text-center">
                <span className="text-9xl font-bold text-white tracking-tightest leading-none">4<span className="text-4xl text-[#0071E3]">×</span></span>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mt-4">Longer Runtime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PerformanceSection() {
  return (
    <main className="bg-white antialiased">
      <HeroSection />
      <ArchitectureSection />
      <PerformanceMetrics />
      <BatterySection />
    </main>
  )
}