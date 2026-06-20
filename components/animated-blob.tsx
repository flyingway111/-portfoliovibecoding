'use client'

import type { CSSProperties } from 'react'

interface BlobProps {
  size?: number
  style?: CSSProperties
  intensity?: 'soft' | 'strong'
}

export default function AnimatedBlob({ size = 600, style }: BlobProps) {
  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, ...style }}>
      {/* Water drop — morphing shape with backdrop blur */}
      <div style={{
        position: 'absolute', inset: '5%',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'radial-gradient(ellipse at 38% 32%, rgba(186,230,253,0.12) 0%, rgba(125,211,252,0.06) 45%, rgba(99,102,241,0.03) 70%, transparent 100%)',
        backdropFilter: 'blur(6px) brightness(1.12)',
        WebkitBackdropFilter: 'blur(6px) brightness(1.12)',
        border: '1px solid rgba(186,230,253,0.1)',
        boxShadow: 'inset 0 0 80px rgba(125,211,252,0.08), 0 0 60px rgba(125,211,252,0.06)',
        animation: 'blob-morph-1 9s ease-in-out infinite',
      }} />

      {/* Inner highlight — top-left like real water */}
      <div style={{
        position: 'absolute', top: '12%', left: '15%',
        width: '30%', height: '20%',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.18) 0%, transparent 100%)',
        filter: 'blur(6px)',
        animation: 'blob-morph-2 11s ease-in-out infinite',
        transform: 'rotate(-20deg)',
      }} />

      {/* Subtle color glow at edges */}
      <div style={{
        position: 'absolute', inset: '15%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 60%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        filter: 'blur(20px)',
        animation: 'blob-morph-3 13s ease-in-out infinite',
      }} />
    </div>
  )
}
