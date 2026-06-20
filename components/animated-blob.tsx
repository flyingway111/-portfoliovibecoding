'use client'

import type { CSSProperties } from 'react'

interface BlobProps {
  size?: number
  style?: CSSProperties
  intensity?: 'soft' | 'strong'
}

export default function AnimatedBlob({ size = 600, style, intensity = 'soft' }: BlobProps) {
  const opacity = intensity === 'strong' ? 1 : 0.75

  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, ...style }}>
      {/* Outer glow ring */}
      <div style={{
        position: 'absolute', inset: '8%',
        borderRadius: '50%',
        border: '1px solid rgba(125,211,252,0.12)',
        animation: 'blob-ring 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', inset: '18%',
        borderRadius: '50%',
        border: '1px solid rgba(125,211,252,0.07)',
        animation: 'blob-ring 8s ease-in-out infinite reverse',
      }} />

      {/* Core radial glow */}
      <div style={{
        position: 'absolute', inset: '15%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(125,211,252,0.45) 0%, rgba(99,102,241,0.3) 40%, rgba(59,130,246,0.1) 70%, transparent 100%)',
        filter: 'blur(12px)',
        animation: 'blob-pulse 5s ease-in-out infinite',
        opacity,
      }} />

      {/* Blob 1 — cyan */}
      <div style={{
        position: 'absolute',
        width: '58%', height: '58%',
        top: '21%', left: '21%',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'oklch(0.78 0.15 195)',
        opacity: intensity === 'strong' ? 0.65 : 0.5,
        filter: 'blur(28px)',
        animation: 'blob-morph-1 9s ease-in-out infinite',
      }} />

      {/* Blob 2 — indigo/purple */}
      <div style={{
        position: 'absolute',
        width: '48%', height: '48%',
        top: '26%', left: '26%',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: '#818CF8',
        opacity: intensity === 'strong' ? 0.55 : 0.4,
        filter: 'blur(22px)',
        animation: 'blob-morph-2 11s ease-in-out infinite',
      }} />

      {/* Blob 3 — deep blue */}
      <div style={{
        position: 'absolute',
        width: '52%', height: '52%',
        top: '24%', left: '24%',
        borderRadius: '50% 50% 40% 60% / 30% 70% 50% 50%',
        background: '#3B82F6',
        opacity: intensity === 'strong' ? 0.45 : 0.3,
        filter: 'blur(32px)',
        animation: 'blob-morph-3 13s ease-in-out infinite',
      }} />

      {/* Hot spot — bright center */}
      <div style={{
        position: 'absolute',
        width: '30%', height: '30%',
        top: '35%', left: '35%',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(186,230,253,0.7) 0%, transparent 70%)',
        filter: 'blur(15px)',
        animation: 'blob-pulse 4s ease-in-out infinite 1s',
      }} />
    </div>
  )
}
