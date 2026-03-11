'use client'

const items = [
  'SaaS Development',
  'Web Applications',
  'Mobile Applications',
  'Custom Websites',
  'Startup MVP Development',
]

export default function ScrollingWords() {
  const doubled = [...items, ...items]

  return (
    <div style={{ overflow: 'hidden', height: 'clamp(70px, 12vw, 160px)', display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexShrink: 0,
          animation: 'scrollWords 18s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            style={{
              fontSize: 'clamp(48px, 10vw, 130px)',
              fontWeight: 700,
              color: 'rgba(0,0,0,0.18)',
              userSelect: 'none',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              paddingRight: '120px',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
