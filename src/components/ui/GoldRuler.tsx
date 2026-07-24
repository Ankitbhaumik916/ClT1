/**
 * Infinite horizontal scrolling gold ruler ticker — adapted from the bio-age
 * dashboard motif. 61 ticks per set (duplicated for a seamless -50% loop) with a
 * static centered indicator and edge-fade mask.
 */
export function GoldRuler({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 61 }, (_, i) => {
    const tall = i % 10 === 0 || i % 5 === 0
    return tall ? 26 : 18
  })

  const renderSet = (keyPrefix: string) =>
    ticks.map((h, i) => (
      <span
        key={`${keyPrefix}-${i}`}
        style={{
          display: 'inline-block',
          width: '1px',
          height: `${h}px`,
          marginRight: '9px',
          borderRadius: '1px',
          background: 'rgba(239,206,150,0.5)',
          flex: '0 0 auto',
        }}
      />
    ))

  return (
    <div
      className={`relative h-[40px] w-full overflow-hidden ${className}`}
      aria-hidden="true"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <div className="absolute inset-0 flex items-center animate-ticker" style={{ width: 'max-content' }}>
        <div className="flex items-center">{renderSet('a')}</div>
        <div className="flex items-center">{renderSet('b')}</div>
      </div>
      {/* Static center indicator */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '2px', height: '40px', background: '#EFCE96' }}
      />
    </div>
  )
}
