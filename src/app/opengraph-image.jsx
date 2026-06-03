import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vlada Marchenko — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#11111b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 90px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(203,166,247,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* violet glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 500,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(203,166,247,0.18) 0%, transparent 70%)',
          }}
        />
        {/* cyan glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(137,220,235,0.12) 0%, transparent 70%)',
          }}
        />

        {/* card */}
        <div
          style={{
            position: 'relative',
            background: '#1e1e2e',
            border: '1px solid #313244',
            borderRadius: '12px',
            padding: '48px 56px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
          }}
        >
          {/* window chrome dots */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#f38ba8' }} />
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#fab387' }} />
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#cba6f7' }} />
            <span style={{ color: '#6c7086', fontSize: '14px', marginLeft: '12px', alignSelf: 'center' }}>
              portfolio.tsx
            </span>
          </div>

          {/* code lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>1</span>
              <span style={{ color: '#89b4fa', fontSize: '15px' }}>const</span>
              <span style={{ color: '#fab387', fontSize: '15px' }}>developer</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>= {'{'}</span>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>2</span>
              <span style={{ color: '#89dceb', fontSize: '15px', marginLeft: '24px' }}>name</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>:</span>
              <span style={{ color: '#cba6f7', fontSize: '62px', fontWeight: 'bold', lineHeight: 1, marginTop: '-4px' }}>
                Vlada Marchenko
              </span>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>3</span>
              <span style={{ color: '#89dceb', fontSize: '15px', marginLeft: '24px' }}>role</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>:</span>
              <span style={{ color: '#89dceb', fontSize: '28px' }}>Frontend Developer</span>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>4</span>
              <span style={{ color: '#89dceb', fontSize: '15px', marginLeft: '24px' }}>stack</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>:</span>
              <span style={{ color: '#cba6f7', fontSize: '18px' }}>'React'</span>
              <span style={{ color: '#cdd6f4', fontSize: '18px' }}>,</span>
              <span style={{ color: '#cba6f7', fontSize: '18px' }}>'Next.js'</span>
              <span style={{ color: '#cdd6f4', fontSize: '18px' }}>,</span>
              <span style={{ color: '#cba6f7', fontSize: '18px' }}>'TypeScript'</span>
              <span style={{ color: '#cdd6f4', fontSize: '18px' }}>,</span>
              <span style={{ color: '#cba6f7', fontSize: '18px' }}>'Node.js'</span>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>5</span>
              <span style={{ color: '#89dceb', fontSize: '15px', marginLeft: '24px' }}>location</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>:</span>
              <span style={{ color: '#fab387', fontSize: '18px' }}>'Hamburg, Germany 🇩🇪'</span>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>6</span>
              <span style={{ color: '#89dceb', fontSize: '15px', marginLeft: '24px' }}>available</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>:</span>
              <span style={{ color: '#fab387', fontSize: '18px' }}>true</span>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#313244', fontSize: '15px', minWidth: '24px' }}>7</span>
              <span style={{ color: '#cdd6f4', fontSize: '15px' }}>{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
