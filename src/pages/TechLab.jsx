function TechLab() {
  const gear = [
    {
      name: 'Web Shooters',
      description: 'Wrist-mounted launchers engineered for fast deployment and controlled swing arcs.',
      specs: 'Pressure-activated, 300 PSI capacity',
      emoji: '🎯'
    },
    {
      name: 'Impact Web',
      description: 'Fast stop + safe restraint for quick containment.',
      specs: 'Instant deployment, non-lethal',
      emoji: '💥'
    },
    {
      name: 'Trip Web',
      description: 'Area control for crowd management and pursuit blocking.',
      specs: 'Wide coverage, sticky surface',
      emoji: '🕸️'
    },
    {
      name: 'Web Dome',
      description: 'Quick protection in crowded zones during emergencies.',
      specs: 'Rapid expansion, temporary shield',
      emoji: '🛡️'
    },
    {
      name: 'Spider-Tracker',
      description: 'Small, sticky beacon used to follow targets discreetly.',
      specs: 'GPS enabled, 48-hour battery',
      emoji: '📍'
    },
    {
      name: 'Suit Lenses / HUD',
      description: 'Enhanced vision modes and real-time threat analysis.',
      specs: 'Night vision, thermal, AR overlay',
      emoji: '👁️'
    }
  ];

  return (
    <div className="container">
      <div className="section-header">
        <h2>Tech Lab</h2>
        <p>Smart tools for smart heroes. Every gadget has a purpose.</p>
      </div>

      <div className="card-grid">
        {gear.map((item, index) => (
          <div key={index} className="card tech-card">
            <div style={{ fontSize: '4rem', textAlign: 'center', padding: '2rem 0', background: 'rgba(30, 136, 229, 0.1)' }}>
              {item.emoji}
            </div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div style={{ 
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(30, 136, 229, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(30, 136, 229, 0.3)'
              }}>
                <p style={{ fontSize: '0.85rem', color: '#64B5F6', margin: 0 }}>
                  <strong>⚙️ Specs:</strong> {item.specs}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-box" style={{ 
        marginTop: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="web-pattern"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white', textAlign: 'center', textShadow: '0 0 20px rgba(211, 47, 47, 0.8)' }}>
            🕸️ Web Fluid Types
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ 
              padding: '1.5rem', 
              background: 'rgba(211, 47, 47, 0.1)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '12px', 
              border: '1px solid rgba(211, 47, 47, 0.3)' 
            }}>
              <h3 style={{ color: '#EF5350', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(211, 47, 47, 0.5)' }}>💥 Impact Web</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Fast stop + safe restraint</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              background: 'rgba(30, 136, 229, 0.1)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '12px', 
              border: '1px solid rgba(30, 136, 229, 0.3)' 
            }}>
              <h3 style={{ color: '#64B5F6', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(30, 136, 229, 0.5)' }}>🕸️ Trip Web</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Area control</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              background: 'rgba(249, 168, 37, 0.1)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '12px', 
              border: '1px solid rgba(249, 168, 37, 0.3)' 
            }}>
              <h3 style={{ color: '#FFB74D', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(249, 168, 37, 0.5)' }}>🛡️ Web Dome</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Quick protection in crowded zones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechLab;
