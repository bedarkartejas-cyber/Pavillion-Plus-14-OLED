'use client'

import { motion } from 'framer-motion'

/**
 * TITAN PRODUCT FOOTER — WHITE UI EDITION
 * Aligned with Pavilion Plus Navbar
 * Principles: Optical balance, restraint, clarity
 */

const footerLinks = [
  {
    title: 'The Vanguard',
    links: ['Victus Extreme 16', 'Performance Tuning', 'DirectStorage Hub', 'Titan Accessories'],
  },
  {
    title: 'The Studio',
    links: ['Lumina OLED Tech', 'Calman Verified', 'ProArt Creator Hub', 'Software Suite'],
  },
  {
    title: 'The Architect',
    links: ['Enterprise Security', 'AI Productivity', 'Sustainability Report', 'Investor Relations'],
  },
  {
    title: 'Concierge',
    links: ['Product Registration', 'Titan Priority Support', 'Service Centers', 'Contact Us'],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-white border-t border-black/[0.06]">

      {/* SUBTLE TOP SEPARATOR (Matches Navbar Border Logic) */}
      <div className="absolute top-0 inset-x-0 h-px bg-black/[0.04]" />

      <div className="mx-auto max-w-[1200px] px-6 pt-24 pb-16">

        {/* BRAND + NAV GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">

          {/* BRAND */}
          <div className="md:col-span-4 space-y-6">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              className="text-[18px] font-semibold text-[#1D1D1F] tracking-tight"
            >
              HP Titan
            </motion.div>

            <p className="text-[13px] text-[#86868B] leading-relaxed max-w-xs">
              Precision-engineered systems designed for creators and professionals
              who value clarity, performance, and endurance.
            </p>
          </div>

          {/* LINKS */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-14">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-[11px] font-medium text-[#1D1D1F] tracking-tight">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[12px] text-[#86868B] hover:text-[#0066CC] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEM BAR (Mirrors Navbar Density) */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">

          {/* STATUS */}
          <div className="flex items-center gap-3 text-[11px] text-[#86868B] tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            Titan Protocol v1.02
            <span className="mx-2 text-black/20">•</span>
            Global / English
          </div>

          {/* LEGAL */}
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Legal'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="text-[11px] text-[#86868B]">
            © {year} HP Computer Inc.
          </div>
        </div>
      </div>
    </footer>
  )
}
