'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

/**
 * THE ELITE BENTO - DYNAMIC ANIMATION EDITION
 * Principles: Kinetic Parallax, Micro-Interaction Physics, and Staggered Reveals.
 * Logic: Uses standard industry scaling for typography and block margins.
 */

const FeatureTile = ({ 
  children, 
  className = "", 
  delay = 0,
  accent = "blue" 
}: { 
  children: ReactNode, 
  className?: string,
  delay?: number,
  accent?: "blue" | "purple" | "emerald"
}) => {
  const containerRef = useRef(null)
  
  const accentColors = {
    blue: "bg-[#0071E3]",
    purple: "bg-[#BF5AF2]",
    emerald: "bg-[#34C759]"
  }

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay, 
        duration: 1.4, 
        ease: [0.28, 0.11, 0.32, 1] // Apple Ease
      }}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-[32px] bg-white border border-black/[0.04] group shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-shadow duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] ${className}`}
    >
      {/* 1. KINETIC SHEEN (Interactive light reflection) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, x: ['-100%', '100%'] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-10" 
      />
      
      {/* 2. ACCENT ATMOSPHERE (Pulsing Glow) */}
      <div className={`absolute -inset-20 ${accentColors[accent]} opacity-0 blur-[120px] group-hover:opacity-[0.06] transition-opacity duration-[1.5s] ease-in-out`} />
      
      {children}
    </motion.div>
  )
}

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Smooth scroll parallax for deep background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={sectionRef} id="features" className="relative py-48 bg-[#F5F5F7] overflow-hidden">
      
      {/* DYNAMIC ATMOSPHERIC LAYERS */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-100 blur-[150px] rounded-full" />
      </motion.div>

      <div className="container-pro mx-auto px-8 max-w-[1300px] relative z-10">
        
        {/* HEADER REVEAL */}
        <div className="mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full border border-black/5 bg-white/60 backdrop-blur-md mb-10 shadow-sm"
          >
            <span className="text-[12px] font-bold text-[#86868B] uppercase tracking-[0.45em]">Engineering Masterclass</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center
              font-bold
              leading-[1.02]
              tracking-[-0.04em]
              text-[clamp(3.8rem,7vw,6.6rem)]
              text-transparent bg-clip-text
              bg-gradient-to-b
              from-[#0B0B0C]
              via-[#1E1E22]
              to-[#6B6B72]"
          >
            Power that moves. <br />
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 0.8, duration: 1.5 }}
              className="block mt-3
                font-semibold
                tracking-[-0.03em]
                text-[clamp(3rem,5.8vw,5.4rem)]
                text-transparent bg-clip-text
                bg-gradient-to-b
                from-[#B0B1B7]
                to-[#7A7B82]"
            >
              Beauty that stays.
            </motion.span>
          </motion.h2>
        </div>

        {/* BENTO GRID REVEAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[460px]">
          
          {/* CONNECTIVITY (Micro-animation on Wi-Fi text) */}
          <FeatureTile accent="blue" delay={0.1} className="md:col-span-8 flex flex-col justify-end p-16">
            <div className="relative z-10">
              <motion.span 
                initial={{ letterSpacing: "0.4em" }}
                whileInView={{ letterSpacing: "0.6em" }}
                transition={{ duration: 2 }}
                className="text-[#0071E3] font-bold text-[11px] uppercase block mb-6"
              >
                Connectivity
              </motion.span>
              <h3 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] mb-8 tracking-tightest">
                Wi-Fi 7. <br/>
                Beyond fast.
              </h3>
              <p className="text-[#424245] text-xl max-w-xl font-medium leading-relaxed opacity-80">
                Experience the next standard of speed. Resolve complex cloud environments instantly with near-zero latency.
              </p>
            </div>
          </FeatureTile>

          {/* EXPANSION (Liquid shimmer divider) */}
          <FeatureTile accent="purple" delay={0.3} className="md:col-span-4 p-14 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[#BF5AF2] font-bold text-[11px] uppercase tracking-[0.4em] block">I/O Precision</span>
              <h3 className="text-3xl font-bold text-[#1D1D1F] tracking-tight">Dual Thunderbolt™ 4</h3>
            </div>
            
            <div className="relative h-24 w-full bg-black/[0.03] rounded-2xl flex items-center justify-center overflow-hidden border border-black/[0.05]">
               <motion.div 
                 animate={{ x: ['-200%', '200%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BF5AF2]/10 to-transparent" 
               />
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="flex gap-4 z-10"
               >
                 <div className="w-1 h-8 bg-[#BF5AF2] rounded-full opacity-40" />
                 <div className="w-1 h-8 bg-[#BF5AF2] rounded-full" />
               </motion.div>
            </div>
            
            <p className="text-[#86868B] text-[15px] font-semibold leading-relaxed">
              Connect pro displays or high-speed RAID arrays at up to 40Gb/s.
            </p>
          </FeatureTile>

          {/* BATTERY (Liquid Fill Animation) */}
          <FeatureTile accent="emerald" delay={0.2} className="md:col-span-5 p-16 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[#34C759] font-bold text-[11px] uppercase tracking-[0.4em] block">Endurance</span>
              <h3 className="text-6xl font-bold text-[#1D1D1F] tracking-tightest">16 Hours</h3>
            </div>
            
            <div className="relative h-3 w-full bg-black/[0.06] rounded-full overflow-hidden border border-black/[0.05]">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 2.5, delay: 0.8, ease: "circOut" }}
                 className="h-full bg-[#34C759]" 
               />
            </div>
            
            <p className="text-[#86868B] text-xl font-medium leading-snug">
              Go from dawn to dusk without reaching for your charger.
            </p>
          </FeatureTile>

          {/* CHASSIS (Hover Scale Depth) */}
          <FeatureTile delay={0.4} className="md:col-span-7 flex items-center p-16">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#1D1D1F]/[0.02] to-transparent pointer-events-none" />
            <div className="max-w-md relative z-10">
              <span className="text-[#1D1D1F]/40 font-bold text-[11px] uppercase tracking-[0.5em] block mb-8">Craftsmanship</span>
              <h3 className="text-5xl font-bold text-[#1D1D1F] mb-8 tracking-tightest">
                Recycled 14. <br/>
                <motion.span 
                  whileInView={{ color: "#1D1D1F" }} 
                  initial={{ color: "#86868B" }} 
                  transition={{ delay: 1, duration: 1 }}
                >
                  Uncompromising.
                </motion.span>
              </h3>
              <p className="text-[#424245] font-medium text-lg leading-relaxed opacity-80">
                A chassis carved from 100% recycled aero-grade aluminum. Lightweight but ready for anything.
              </p>
            </div>
          </FeatureTile>

        </div>

        {/* CERTIFICATION REVEAL (Micro-Interaction) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-32 pt-16 border-t border-black/[0.06] flex flex-wrap justify-center gap-16 md:gap-24"
        >
           {['B&O Audio', 'Dolby Vision®', 'IMAX® Enhanced', 'VESA True Black'].map((cert, i) => (
             <motion.span 
               key={i} 
               whileHover={{ scale: 1.1, color: '#1D1D1F' }}
               className="text-[12px] font-bold text-[#86868B]/50 uppercase tracking-[0.5em] transition-all cursor-crosshair"
             >
               {cert}
             </motion.span>
           ))}
        </motion.div>

      </div>
    </section>
  )
}