import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  id?: string
}

/** Minimal light card: white surface, hairline border, subtle lift on hover. */
export function GlassCard({ children, className = '', id }: GlassCardProps) {
  return (
    <div
      id={id}
      className={`group rounded-2xl border border-[rgba(0,0,0,0.12)] bg-white transition-all duration-300 hover:border-[rgba(0,0,0,0.28)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] ${className}`}
    >
      {children}
    </div>
  )
}
