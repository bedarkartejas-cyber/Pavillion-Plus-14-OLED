'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * HP Pavilion Plus – Global Navigation
 * Tier: Industry / Product-grade
 * Principles: Optical balance, restraint, clarity
 */

const SCROLL_TRIGGER = 48

const NAV_LINKS = [
  { name: 'Overview', href: '#hero' },
  { name: 'OLED Display', href: '#display' },
  { name: 'Tech Specs', href: '#specs' },
]

export default function Navbar({
  onCompareClick,
  isComparing,
}: {
  onCompareClick: () => void
  isComparing: boolean
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Overview')

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_TRIGGER)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const isSolid = isScrolled || isComparing

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-[100]
        transition-[background,backdrop-filter,padding] duration-500 ease-out
        ${isSolid
          ? 'bg-white/75 backdrop-blur-2xl border-b border-black/[0.06] py-3'
          : 'bg-transparent py-6'}
      `}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between">
        
        {/* BRAND */}
        <div className="flex flex-col">
          <span className="text-[19px] font-semibold text-[#1D1D1F] leading-none tracking-tight">
            Pavilion Plus 14
          </span>
          <span className="text-[11px] text-[#86868B] tracking-tight">
            Premium OLED Laptop
          </span>
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.name
            return (
              <button
                key={link.name}
                onClick={() => setActiveLink(link.name)}
                className="relative text-[12px] tracking-tight focus:outline-none"
              >
                <span
                  className={`
                    transition-colors
                    ${isActive
                      ? 'text-[#1D1D1F]'
                      : 'text-[#86868B] hover:text-[#0066CC]'}
                  `}
                >
                  {link.name}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#1D1D1F]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <button
            onClick={onCompareClick}
            className={`
              text-[12px] tracking-tight transition-colors
              focus:outline-none
              ${isComparing
                ? 'text-[#0066CC] font-medium'
                : 'text-[#86868B] hover:text-[#0066CC]'}
            `}
            aria-label="Compare products"
          >
            Compare
          </button>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`
              px-4 py-1.5 rounded-full text-[12px] font-medium
              shadow-sm
              transition-colors duration-300
              focus:outline-none
              ${isSolid
                ? 'bg-[#0071E3] text-white hover:bg-[#0077ED]'
                : 'bg-[#1D1D1F] text-white hover:bg-black'}
            `}
            aria-label="Buy Pavilion Plus 14"
          >
            Buy
          </motion.button>

          {/* MOBILE MENU */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-5 h-5"
            aria-label="Open menu"
          >
            <span className="h-[1.4px] w-full bg-[#1D1D1F]" />
            <span className="h-[1.4px] w-full bg-[#1D1D1F]" />
          </button>
        </div>
      </div>
    </nav>
  )
}
