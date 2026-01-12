'use client'

import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import GallerySection from './components/GallerySection'
import PerformanceSection from './components/PerformanceSection'
import DisplaySection from './components/DisplaySection'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import CompareSection from './components/CompareSection'
import Footer from './components/Footer'

export default function Home() {
  const [isComparing, setIsComparing] = useState(false)

  const toggleCompare = () => {
    setIsComparing(!isComparing)
  }

  return (
    <main className="relative bg-[#050507] min-h-screen selection:bg-blue-500/30">
      
      {/* 1. Global Navigation (Sticky) */}
      <Navigation 
        onCompareClick={toggleCompare} 
        isComparing={isComparing} 
      />

      {/* Conditional Comparison View */}
      {isComparing && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-black">
          <CompareSection />
        </div>
      )}

      {/* 2. Hero Section (Introduction) */}
      <div id="overview">
        <HeroSection />
      </div>

      {/* 3. Visual Gallery Section */}
      <GallerySection />

      {/* 4. Performance Section */}
      <div id="performance">
        <PerformanceSection />
      </div>

      {/* 5. Display Section */}
      <div id="display">
        <DisplaySection />
      </div>

      {/* 6. Features Grid */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* 7. Buy Section (Bank Offers & Config) */}
      <div id="buy">
        <CTASection />
      </div>

      {/* 8. Footer */}
      <Footer />
      
    </main>
  )
}