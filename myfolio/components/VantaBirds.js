'use client'

import { useEffect, useRef, useState } from 'react'

const VantaBirds = ({ 
  children, 
  className = "",
  options = {} 
}) => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined' && window.VANTA) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000000, // Black background
          color1: 0x4facfe, // Light blue
          color2: 0x00f2fe, // Cyan
          colorMode: 'lerpGradient',
          birdSize: 1.5,
          wingSpan: 20.00,
          speedLimit: 5.00,
          separation: 20.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 3.00,
          ...options // Allow custom options to override defaults
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, options])

  return (
    <div 
      ref={vantaRef}
      className={`fixed inset-0 z-0 ${className}`}
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1
      }}
    >
      {children}
    </div>
  )
}

export default VantaBirds