'use client'

import type { CSSProperties } from 'react'

interface BlobProps {
  size?: number
  style?: CSSProperties
}

export default function AnimatedBlob({ size = 600, style }: BlobProps) {
  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, ...style }}>
      <div style={{
        position: 'absolute', inset: '5%',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'radial-gradient(ellipse at 40% 40%, rgba(125,211,252,0.5) 0%, rgba(99,102,241,0.35) 45%, rgba(59,130,246,0.15) 70%, transparent 100%)',
        filter: 'blur(40px)',
        animation: 'blob-morph-1 9s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', inset: '15%',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: 'radial-gradient(ellipse at 60% 50%, rgba(167,139,250,0.4) 0%, rgba(125,211,252,0.2) 50%, transparent 100%)',
        filter: 'blur(30px)',
        animation: 'blob-morph-2 11s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', inset: '25%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(186,230,253,0.6) 0%, transparent 70%)',
        filter: 'blur(20px)',
        animation: 'blob-pulse 5s ease-in-out infinite',
      }} />
    </div>
  )
}
