'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

/**
 * HP PAVILION PLUS 14 OLED - GALLERY MONOLITH
 * Update: Images set to "cover" for immersive edge-to-edge frame filling.
 */

const FeaturePortal = ({ 
  title, subtitle, description, image, index, accent, isLast = false 
}: { 
  title: string, subtitle: string, description: string, image: string, index: number, accent: string, isLast?: boolean 
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 35, damping: 25 })
  
  // Parallax logic optimized for 'object-cover' to prevent edge gaps
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1.2, 1.1])
  const imageY = useTransform(smoothProgress, [0, 1], [-40, 40])
  const textY = useTransform(smoothProgress, [0.1, 0.4], [50, 0])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const colorMap: Record<string, string> = {
    blue: "#0071E3",
    purple: "#BF5AF2",
    emerald: "#34C759"
  }

  const currentAccent = colorMap[accent] || colorMap.blue

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity }}
      className={`relative min-h-[75vh] flex flex-col items-center justify-center px-6 ${isLast ? 'mb-0' : 'mb-24 lg:mb-32'}`}
    >
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center max-w-[1550px] mx-auto">
        
        {/* NARRATIVE PANEL */}
        <motion.div 
          style={{ y: textY }}
          className={`lg:col-span-5 space-y-8 ${index % 2 === 0 ? 'lg:order-last' : ''}`}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: 48 }} 
                transition={{ duration: 1 }} 
                className="h-[1px]" 
                style={{ backgroundColor: currentAccent }} 
              />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#86868B]">Module // 0{index + 1}</span>
            </div>
            
            <h3 className="text-[clamp(2.2rem,4.5vw,5rem)] font-bold tracking-tightest leading-[0.92] text-[#1D1D1F]">
              {title.split(', ').map((word, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#86868B] to-[#D2D2D7]' : ''}`}>{word}</span>
              ))}
            </h3>
            <p className="text-xl lg:text-2xl font-medium text-[#424245] leading-[1.3] max-w-md opacity-90">{description}</p>
          </div>

          <motion.button whileHover={{ x: 10 }} className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] transition-all" style={{ color: currentAccent }}>
            <span>Explore Engineering</span>
            <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:border-transparent group-hover:shadow-xl">
              <span className="text-lg">→</span>
            </div>
          </motion.button>
        </motion.div>

        {/* IMAGE PORTAL - Edge-to-Edge Frame Filling */}
        <div className="lg:col-span-7 relative w-full">
          <motion.div 
            style={{ scale: 0.98 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[16/10] rounded-[48px] overflow-hidden bg-[#F5F5F7] border border-black/[0.04] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)]"
          >
            {/* CHANGED: 'object-cover' and removed padding to fill the frame completely */}
            <motion.img 
              style={{ scale: imageScale, y: imageY }}
              src={image} 
              alt={title} 
              className="w-full h-full object-cover saturate-[1.05] contrast-[1.02]" 
            />
            
            {/* Structural Glass Refraction Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.1] via-transparent to-white/[0.1] pointer-events-none" />
            
            {/* Minimalist HUD */}
            <div className="absolute inset-0 flex flex-col justify-between p-10 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-[16px] bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-xl">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentAccent, boxShadow: `0 0 12px ${currentAccent}` }} />
                </div>
                <span className="text-[9px] font-black text-white/50 uppercase tracking-[1em]">{subtitle} // OPTIMIZED</span>
              </div>
              <div className="text-white/[0.03] font-black text-[12vw] tracking-tightest leading-none select-none uppercase">
                Titan
              </div>
            </div>
          </motion.div>

          {/* MICA SPEC BADGE */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: 0.3 }} 
            className="absolute -bottom-8 -right-8 hidden xl:flex flex-col p-10 rounded-[48px] bg-white/70 backdrop-blur-[60px] border border-white shadow-2xl z-20 w-80"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: currentAccent }}>Certified Logic</span>
            <span className="text-5xl font-bold text-[#1D1D1F] tracking-tightest leading-none">100%</span>
            <p className="text-[14px] font-bold text-[#86868B] mt-4 uppercase tracking-widest opacity-60">Verified Performance</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  return (
    <section className="relative pt-24 lg:pt-32 pb-0 bg-white overflow-hidden">
      {/* Top Transition Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      <div className="mx-auto max-w-[1550px]">
        {/* Module 01: Sustainable Chassis */}
        <FeaturePortal 
          index={0}
          subtitle="CRAFT"
          title="Sustainable, Chassis"
          description="A chassis engineered with recycled materials that watch over your work. Premium design that respects the future."
          image="/gallery/prenosnik-hp-pavilion-plus-14-ew1001nn-ultra-7-155h-4576-1.png"
          accent="emerald"
        />

        {/* Module 02: Architecture & Ports */}
        <FeaturePortal 
          index={1}
          subtitle="CONNECT"
          title="Universal, Architecture"
          description="Equipped with HDMI 2.1 and high-speed USB-C® ports for absolute data mastery and rapid external expansion."
          image="/gallery/img4.jpg"
          accent="purple"
        />

        {/* Module 03: OLED Visuals */}
        <FeaturePortal 
          index={2}
          subtitle="VISUALS"
          title="2.8K OLED, Clarity"
          description="Bring out the bold, vibrant details of your movies and projects with infinite contrast and fluid framerates."
          image="/gallery/img2.jpg"
          accent="blue"
          isLast={true}
        />
      </div>
    </section>
  )
}