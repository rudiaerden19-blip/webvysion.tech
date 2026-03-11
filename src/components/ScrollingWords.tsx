'use client'

const words = [
  'SaaS Development',
  'Web Applications',
  'Mobile Applications',
  'Custom Websites',
  'Startup MVP Development',
  'SaaS Development',
  'Web Applications',
  'Mobile Applications',
  'Custom Websites',
  'Startup MVP Development',
]

export default function ScrollingWords() {
  return (
    <div className="relative overflow-hidden py-8" style={{ height: '160px' }}>
      <div
        className="flex gap-[120px] whitespace-nowrap"
        style={{
          animation: 'scrollWords 8s linear infinite',
          willChange: 'transform',
        }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              fontSize: '140px',
              fontWeight: 700,
              color: 'rgba(0,0,0,0.18)',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
