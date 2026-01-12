'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

/**
 * HP PAVILION PLUS 14 OLED - PREMIERE DISPLAY & NEURAL AI
 * Animations: Staggered reveal, Hardware-grade physics, and Refractive HUDs.
 */

export default function DisplaySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // ELITE PHYSICS: High damping for a weighted, mechanical feel
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 45, damping: 35 })
  
  const laptopScale = useTransform(smoothScroll, [0, 0.4], [0.85, 1])
  const laptopRotate = useTransform(smoothScroll, [0, 0.4], [12, 0])
  const textOpacity = useTransform(smoothScroll, [0.05, 0.25], [0, 1])
  
  // HUD Elements Parallax
  const hudY = useTransform(smoothScroll, [0, 1], [0, -100])

  if (!isMounted) return <div className="h-[100vh] bg-white" />

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <section ref={containerRef} className="relative bg-white pt-0 overflow-hidden">
      
      {/* 1. STUDIO LIGHTING CAUSTICS */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.08, 0.03], rotate: [0, 5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[100vw] h-[100vw] bg-[#0071E3] blur-[300px] rounded-full" 
        />
      </div>

      <div className="container-pro relative z-20 mx-auto max-w-[1550px] px-10">
        
        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-8 lg:pt-12 mb-16 lg:mb-24">
          
          {/* TEXT PANEL - Vision Protocol Reveal */}
          <motion.div style={{ opacity: textOpacity }} className="lg:col-span-5 space-y-10 lg:sticky lg:top-10">
            <div className="space-y-6">
              <motion.div 
                custom={0}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-[1px] bg-[#0071E3]" 
                />
                <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#86868B]">Vision Protocol</span>
              </motion.div>
              
              <motion.h2 
                custom={1}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[clamp(3rem,6.5vw,8rem)] font-bold tracking-tightest leading-[0.95] text-[#1D1D1F]"
              >
                2.8K OLED. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#86868B] to-[#D2D2D7]">True black.</span>
              </motion.h2>
            </div>

            {/* BENCHMARKS (Animated HUD Style) */}
            <div className="flex flex-col gap-8">
               {[
                 { label: 'Pixel Latency', value: '0.2ms' },
                 { label: 'Luminance Peak', value: '500 nits' }
               ].map((spec, i) => (
                 <motion.div 
                    key={i} 
                    custom={i + 2}
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-8 group"
                 >
                    <div className="w-[1px] h-10 bg-black/[0.06] relative overflow-hidden">
                       <motion.div 
                         initial={{ y: "-100%" }}
                         whileInView={{ y: "100%" }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 bg-[#0071E3] h-1/2 shadow-[0_0_10px_#0071E3]" 
                       />
                    </div>
                    <div>
                       <div className="text-3xl font-bold text-[#1D1D1F] tracking-tighter">{spec.value}</div>
                       <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#86868B] mt-1">{spec.label}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          {/* 3. HARDWARE PORTAL (Kinetic Scale & Reveal) */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              style={{ scale: laptopScale, rotateX: laptopRotate }} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/10] w-full rounded-[56px] lg:rounded-[72px] overflow-hidden bg-white shadow-[0_60px_120px_-30px_rgba(0,0,0,0.18)] border border-black/[0.03]"
            >
              <div className="relative w-full h-full bg-[#080808] overflow-hidden group">
                 <motion.img 
                   src="D:\Techjar\HP\wss\Asus\DEMO@\ClientDEMO\public\gallery\oled.png" 
                   className="w-full h-full object-cover saturate-[1.4] brightness-[0.85] transition-all duration-[6s] group-hover:scale-105" 
                   alt="HP Pavilion OLED"
                 />
                 
                 {/* INTERNAL HARDWARE HUD (Neural Overlay) */}
                 <div className="absolute inset-0 flex flex-col justify-between p-12 lg:p-16 pointer-events-none">
                    <div className="flex justify-between items-start">
                       <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="w-12 h-12 rounded-[20px] bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center"
                       >
                          <div className="w-2 h-2 rounded-full bg-[#0071E3] shadow-[0_0_20px_#0071E3] animate-pulse" />
                       </motion.div>
                       <span className="text-[10px] font-black text-white/30 uppercase tracking-[1em]">OLED // GENERATION.14</span>
                    </div>
                    <motion.div 
                       style={{ y: hudY }}
                       className="text-white/[0.02] font-black text-[20vw] tracking-tightest leading-none select-none"
                    >
                       VIVID
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. NEURAL AI BENTO (Staggered Grid Reveal) */}
        <div className="mt-16 lg:mt-24 pb-24 border-t border-black/[0.03] pt-16 lg:pt-24">
          <div className="mb-16 text-center max-w-4xl mx-auto space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[11px] font-black uppercase tracking-[0.8em] text-[#0071E3]"
            >
              Machine Learning Architecture
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-[#1D1D1F] tracking-tightest leading-none"
            >
              Intelligence, <span className="text-[#86868B]">integrated.</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                title: 'Multimedia Orchestration', 
                text: 'StoryCube utilizes the NPU to categorize massive libraries instantly. Organize your creative legacy without lifting a finger.',
                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
                style: 'white'
              },
              { 
                title: 'Security & Privacy', 
                text: 'Adaptive Dimming and Lock respond to your presence. A chassis that watches over your work, so you don\'t have to.',
                custom: true, // Special Card 2
                style: 'black'
              },
              { 
                title: 'Crystal Audio', 
                text: 'Deep-learning noise cancelation filters out the world. Crystal-clear communication in any environment.',
                img: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=1000',
                style: 'white',
                audio: true
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col p-10 rounded-[48px] lg:rounded-[56px] shadow-sm transition-all duration-700 overflow-hidden ${card.style === 'black' ? 'bg-[#010101] shadow-2xl' : 'bg-white border border-black/[0.04] hover:shadow-xl'}`}
              >
                {/* Image / Visualization Logic */}
                <div className={`relative w-full aspect-[4/3] rounded-[36px] overflow-hidden mb-8 flex items-center justify-center ${card.style === 'black' ? 'bg-white/[0.02]' : 'bg-[#F5F5F7]'}`}>
                  {card.custom ? (
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
                      transition={{ duration: 4, repeat: Infinity }} 
                      className="w-40 h-40 rounded-full border border-[#0071E3]/30 flex items-center justify-center"
                    >
                       <div className="w-24 h-24 rounded-full border border-[#0071E3]/60 flex items-center justify-center">
                          <div className="w-3 h-3 bg-[#0071E3] rounded-full shadow-[0_0_40px_#0071E3]" />
                       </div>
                    </motion.div>
                  ) : (
                    <img src={card.img} className={`w-full h-full object-cover transition-all duration-[2s] ${card.style === 'white' ? 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100' : ''}`} alt={card.title} />
                  )}
                  {card.audio && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-xl border border-white flex items-center justify-center shadow-xl">
                         <span className="text-2xl">🎙️</span>
                      </div>
                    </div>
                  )}
                  {card.custom && <div className="absolute bottom-8 text-white/20 text-[9px] font-black uppercase tracking-[0.5em]">Adaptive Shield Active</div>}
                  {card.style === 'white' && !card.audio && <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />}
                </div>

                <div className="space-y-4">
                  <h4 className={`text-2xl font-bold tracking-tight ${card.style === 'black' ? 'text-white' : 'text-[#1D1D1F]'}`}>{card.title}</h4>
                  <p className={`text-[15px] font-medium leading-relaxed ${card.style === 'black' ? 'text-[#86868B]' : 'text-[#6E6E73]'}`}>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}