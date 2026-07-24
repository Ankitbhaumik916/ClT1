import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function GlassCard({ children, className = '', id }: GlassCardProps) {
  return (
    <div
      id={id}
      className={`group rounded-3xl border border-white/10 transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(14,14,14,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLElement
        target.style.borderColor = 'rgba(239,206,150,0.3)'
        target.style.boxShadow = '0 0 40px rgba(239,206,150,0.1)'
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLElement
        target.style.borderColor = 'rgba(255,255,255,0.1)'
        target.style.boxShadow = 'none'
      }}
    >
      {children}
    </div>
  )
}
