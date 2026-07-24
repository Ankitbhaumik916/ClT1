import { useRef, useState } from 'react'

/**
 * Full-screen background video (autoplay / loop / muted / inline) that fades in
 * over 1500ms on load. A dark gold-tinted scrim + vignette sit on top so the
 * portfolio content stays legible across the whole scroll. Honors
 * prefers-reduced-motion with a static gradient fallback.
 */
export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [loaded, setLoaded] = useState(false)

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #0a0a0a 70%), linear-gradient(160deg, rgba(239,206,150,0.08), transparent 60%)',
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0a]" aria-hidden="true">
      <video
        ref={videoRef}
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1500ms ease-in-out',
        }}
      />
      {/* Gold-tinted darkening scrim for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.8) 100%)',
        }}
      />
      {/* Warm gold glow wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(239,206,150,0.10) 0%, transparent 55%)',
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(10,10,10,0.85) 100%)',
        }}
      />
    </div>
  )
}
