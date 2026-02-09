import { useState } from 'react';

function DailyBugle() {
  const [vote, setVote] = useState(null);
  const [votes, setVotes] = useState({ hero: 847, menace: 153 });

  const handleVote = (choice) => {
    if (!vote) {
      setVote(choice);
      setVotes(prev => ({
        ...prev,
        [choice]: prev[choice] + 1
      }));
    }
  };

  const totalVotes = votes.hero + votes.menace;
  const heroPercent = Math.round((votes.hero / totalVotes) * 100);
  const menacePercent = Math.round((votes.menace / totalVotes) * 100);

  const incidents = [
    {
      location: 'Queens',
      description: 'Small fire contained before spreading.',
      time: '2 hours ago',
      emoji: '🔥'
    },
    {
      location: 'Brooklyn',
      description: 'Suspicious drone activity stopped.',
      time: '5 hours ago',
      emoji: '🚁'
    },
    {
      location: 'Downtown',
      description: 'Crowd control during emergency evacuation.',
      time: '8 hours ago',
      emoji: '👥'
    },
    {
      location: 'Midtown',
      description: 'Web-slinging spotted—commuters report "fast, quiet, helpful".',
      time: '12 hours ago',
      emoji: '🕸️'
    }
  ];

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 20px rgba(211, 47, 47, 0.5))' }}>📰</div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          color: 'white', 
          marginBottom: '0.5rem',
          textShadow: '0 0 30px rgba(211, 47, 47, 0.8)'
        }}>
          DAILY BUGLE
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)' }}>NYC Updates & Spider-Man Sightings</p>
      </div>

      <div className="glass-box" style={{ 
        marginBottom: '3rem',
        textAlign: 'center',
        background: 'rgba(211, 47, 47, 0.2)',
        border: '1px solid rgba(211, 47, 47, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          fontSize: '8rem',
          opacity: 0.1
        }}>⚡</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '1.75rem', margin: 0, color: 'white', marginBottom: '0.5rem', textShadow: '0 0 20px rgba(211, 47, 47, 0.8)' }}>
            ⚡ BREAKING NEWS
          </h3>
          <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.95)' }}>
            Web-slinging spotted near Midtown — commuters report 'fast, quiet, helpful'.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'white', textShadow: '0 0 20px rgba(211, 47, 47, 0.5)' }}>
          Recent Incidents
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {incidents.map((incident, index) => (
            <div 
              key={index}
              className="glass-box"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(211, 47, 47, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
              }}
            >
              <div style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 10px rgba(211, 47, 47, 0.5))' }}>{incident.emoji}</div>
              <div style={{ flex: 1 }}>
                <span style={{ 
                  color: '#64B5F6', 
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textShadow: '0 0 10px rgba(30, 136, 229, 0.5)'
                }}>
                  📍 {incident.location}
                </span>
                <p style={{ margin: '0.5rem 0 0', color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.05rem' }}>
                  {incident.description}
                </p>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
                {incident.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-box" style={{ 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="web-pattern"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'white', textShadow: '0 0 20px rgba(211, 47, 47, 0.8)' }}>
            📊 Public Opinion Poll
          </h3>
          <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.125rem' }}>
            Is Spider-Man a hero or a menace?
          </p>
          
          {!vote && (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <button 
                onClick={() => handleVote('hero')}
                className="btn btn-primary"
                style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}
              >
                🦸 Hero
              </button>
              <button 
                onClick={() => handleVote('menace')}
                className="btn btn-secondary"
                style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}
              >
                ⚠️ Menace
              </button>
            </div>
          )}

          {vote && (
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#FFB74D', textShadow: '0 0 10px rgba(249, 168, 37, 0.5)' }}>
                {vote === 'hero' 
                  ? '✓ Thanks for your support!' 
                  : "Everyone's entitled to their opinion."}
              </p>
              
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>🦸 Hero</span>
                    <span style={{ fontWeight: 'bold', color: '#4CAF50' }}>{heroPercent}%</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '30px', 
                    background: 'rgba(255,255,255,0.1)', 
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{ 
                      width: `${heroPercent}%`, 
                      height: '100%', 
                      background: 'linear-gradient(90deg, #4CAF50, #66BB6A)',
                      transition: 'width 1s ease-out',
                      boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)'
                    }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>⚠️ Menace</span>
                    <span style={{ fontWeight: 'bold', color: '#EF5350' }}>{menacePercent}%</span>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '30px', 
                    background: 'rgba(255,255,255,0.1)', 
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{ 
                      width: `${menacePercent}%`, 
                      height: '100%', 
                      background: 'linear-gradient(90deg, #D32F2F, #EF5350)',
                      transition: 'width 1s ease-out',
                      boxShadow: '0 0 20px rgba(211, 47, 47, 0.5)'
                    }}></div>
                  </div>
                </div>

                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                  Total votes: {totalVotes}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DailyBugle;
