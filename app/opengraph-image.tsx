import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#0d0d0d',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
      }}
    >
      {/* Gradient top bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '6px',
        background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
      }} />

      {/* Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '100px',
        padding: '8px 20px',
        fontSize: '14px',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '40px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        ★ Mídia Kit 2026
      </div>

      {/* Title */}
      <div style={{ display: 'flex', fontSize: '80px', fontWeight: 900, lineHeight: 1.0, marginBottom: '24px' }}>
        <span style={{ color: '#4285F4' }}>Dev</span>
        <span style={{ color: '#EA4335' }}>Fest</span>
        <span style={{ color: '#FBBC05' }}> Porto </span>
        <span style={{ color: '#34A853' }}>Alegre</span>
      </div>

      <div style={{ fontSize: '48px', fontWeight: 900, color: '#f0f0f0', marginBottom: '32px' }}>
        2026
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize: '22px',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        maxWidth: '700px',
        lineHeight: 1.5,
      }}>
        O principal ponto de encontro estratégico da comunidade tech do Sul do Brasil.
      </div>

      {/* Pills */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '48px' }}>
        {['GDG Porto Alegre', 'Final de Outubro de 2026', 'gdgpoars@gmail.com'].map((pill) => (
          <div key={pill} style={{
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px',
            padding: '8px 20px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
          }}>
            {pill}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  )
}