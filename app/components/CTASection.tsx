'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

/**
 * TITAN PRODUCT INVITATION — CANVAS EDITION
 * Theme: Studio White
 * Features: Canvas-based ambient motion + editorial CTA
 */

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* ───────────────────────────────────────────── */
  /* Scroll-based motion                           */
  /* ───────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  /* ───────────────────────────────────────────── */
  /* Canvas animation (ambient light waves)        */
  /* ───────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time) * 0.15),
        canvas.height * (0.4 + Math.cos(time) * 0.1),
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      )

      gradient.addColorStop(0, 'rgba(0,113,227,0.06)')
      gradient.addColorStop(0.4, 'rgba(0,113,227,0.03)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrame = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F5F7] py-44 overflow-hidden border-t border-black/[0.04]"
    >
      {/* ───────────────────────────────────────────── */}
      {/* CANVAS LAYER                                */}
      {/* ───────────────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft studio top-light */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* ───────────────────────────────────────────── */}
      {/* CONTENT                                     */}
      {/* ───────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-[1000px] px-6 text-center"
      >
        {/* Eyebrow */}
        <span className="block text-[11px] font-medium tracking-tight text-[#86868B] mb-8">
          Pavilion Plus 14 OLED
        </span>

        {/* Headline */}
        <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-tight leading-[1.05] text-[#1D1D1F] mb-10">
          Ready when you are.
        </h2>

        {/* Copy */}
        <p className="text-[18px] md:text-[20px] text-[#424245] leading-relaxed max-w-2xl mx-auto mb-16">
          Designed for creators, professionals, and everyday brilliance.
          Pavilion Plus 14 OLED delivers clarity, endurance, and performance
          in a form that disappears in your bag.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 rounded-full bg-[#0071E3] text-white text-[15px] font-medium
                       shadow-[0_8px_24px_rgba(0,113,227,0.25)] hover:bg-[#0077ED] transition-colors"
          >
            Buy Pavilion Plus 14
          </motion.button>

          <motion.a
            whileHover={{ color: '#0066CC' }}
            href="#specs"
            className="text-[15px] font-medium text-[#1D1D1F] transition-colors"
          >
            Explore technical specifications
          </motion.a>
        </div>

        {/* Value strip */}
        <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-black/[0.06] pt-16 text-left">
          <div>
            <span className="block text-[11px] font-medium text-[#86868B] mb-2">
              Display
            </span>
            <p className="text-[15px] text-[#1D1D1F]">
              2.8K OLED · 120Hz · 100% DCI-P3
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-medium text-[#86868B] mb-2">
              Performance
            </span>
            <p className="text-[15px] text-[#1D1D1F]">
              Intel® Core™ Ultra · AI Acceleration
            </p>
          </div>

          <div>
            <span className="block text-[11px] font-medium text-[#86868B] mb-2">
              Endurance
            </span>
            <p className="text-[15px] text-[#1D1D1F]">
              Up to 27 hours · Fast Charge
            </p>
          </div>
        </div>
      </motion.div>

      {/* Ultra-subtle watermark */}
      <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 text-[26vw]
                      font-semibold tracking-tight text-black/[0.025]
                      pointer-events-none select-none">
        TITAN
      </div>
    </section>
  )
}
