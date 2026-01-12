'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

/**
 * HP PAVILION PLUS 14 OLED - ULTRA-PREMIUM "STUDIO" EDITION
 * Core Principles: Negative Space, Optical Typography, and Kinetic Depth.
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  // 1. HIGH-FIDELITY MOTION PHYSICS (Industry Standard)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Heavier damping for a "weighted" luxurious feel
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 45, damping: 35 })
  
  const textY = useTransform(smoothScroll, [0, 1], [0, -120])
  const opacity = useTransform(smoothScroll, [0, 0.4], [1, 0])
  const scale = useTransform(smoothScroll, [0, 0.4], [1, 0.96])
  const backgroundY = useTransform(smoothScroll, [0, 1], ['0%', '20%'])

  if (!isMounted) return <div className="h-[100vh] bg-[#F5F5F7]" />

  return (
    <section 
      ref={containerRef}
      className="relative h-[115vh] bg-[#F5F5F7] flex items-center justify-center overflow-hidden"
    >
      {/* 1. PRISMATIC OPTICS (Advanced Studio Lighting) */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        {/* Soft "Top-Down" Studio Key Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] bg-gradient-to-b from-white via-white/40 to-transparent opacity-80" />
        
        {/* Kinetic Light Refractions - Subtle Blue & Lavender */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-[#0066CC] blur-[180px] rounded-full mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -8, 0],
            opacity: [0.02, 0.05, 0.02] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[#BF5AF2] blur-[180px] rounded-full mix-blend-multiply" 
        />

        {/* Hairline Technical Floor - Ultra-fine separation */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      </motion.div>

      <div className="container-pro relative z-10">
        <motion.div 
          style={{ y: textY, opacity, scale }}
          className="flex flex-col items-center text-center"
        >
          {/* 2. TITANIUM MICRO-BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.28, 0.11, 0.32, 1] }}
            className="mb-12 px-5 py-1.5 rounded-full border border-black/5 bg-white/30 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <span className="text-[11px] font-bold text-[#86868B] uppercase tracking-[0.45em]">
              Pavilion Plus 14 OLED
            </span>
          </motion.div>

          {/* 3. OPTICAL TYPOGRAPHY (The Apple "Hook") */}
          <motion.div className="mb-14">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.28, 0.11, 0.32, 1] }}
              className="text-6xl md:text-[9rem] font-bold text-[#1D1D1F] tracking-tightest leading-[0.98] text-balance"
            >
              Thin as air. <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-b from-[#86868B] to-[#424245]"
              >
                Tough as titanium.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* 4. SURGICAL CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.28, 0.11, 0.32, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-[1.75rem] font-medium text-[#424245] leading-[1.3] mb-16 text-balance px-4">
              Our lightest OLED ever, now powered by Intel Core Ultra. <br />
              Performance that fits in your palm.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#0077ED" }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-14 py-4 bg-[#0071E3] text-white rounded-full font-semibold text-[17px] shadow-[0_8px_30px_rgba(0,113,227,0.15)] transition-all"
              >
                Buy now
              </motion.button>
              
              <motion.a 
                href="#specs"
                className="group flex items-center gap-2 text-[#0066CC] text-xl font-medium"
              >
                Watch the film
                <div className="w-8 h-8 rounded-full border border-[#0066CC]/20 flex items-center justify-center group-hover:bg-[#0066CC]/5 transition-colors">
                  <span className="text-sm ml-0.5">▶</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 5. THE "STUDIO" FOOTER (Surgical Precision) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.28, 0.11, 0.32, 1] }}
        className="absolute bottom-14 w-full px-20 hidden lg:flex justify-between items-center max-w-[1400px] border-t border-black/[0.04] pt-12"
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] text-[#86868B] uppercase tracking-[0.3em] font-bold">Luminance</span>
          <span className="text-[18px] text-[#1D1D1F] font-semibold">500 Nits HDR</span>
        </div>
        
        <div className="flex gap-24">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-[#86868B] uppercase tracking-[0.3em] font-bold">Chassis</span>
            <span className="text-[18px] text-[#1D1D1F] font-semibold">Recycled 14</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-[#86868B] uppercase tracking-[0.3em] font-bold">Refresh</span>
            <span className="text-[18px] text-[#1D1D1F] font-semibold">120Hz Fluid</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-right">
          <span className="text-[10px] text-[#86868B] uppercase tracking-[0.3em] font-bold">Carbon</span>
          <span className="text-[18px] text-[#1D1D1F] font-semibold">EPEAT Gold</span>
        </div>
      </motion.div>
    </section>
  )
}