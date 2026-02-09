import { useState } from 'react';

function Villains() {
  const [selectedImage, setSelectedImage] = useState(null);

  const villains = [
    {
      name: 'Green Goblin',
      threat: 'Extreme',
      description: 'Unpredictable strategist with high damage potential.',
      weakness: 'Mental instability, personal connections',
      image: 'https://www.theringer.com/_next/image?url=https%3A%2F%2Fwp.theringer.com%2Fwp-content%2Fuploads%2F2021%2F12%2FDafoeGoblin_MarvelStudios_Getty_Ringer.jpeg&w=3840&q=75&dpl=a8b73fcf73f629560bb508a5483df024a46b0236',
      bgColor: '#1a2a1a'
    },
    {
      name: 'Doctor Octopus',
      threat: 'High',
      description: 'Brilliant mind + powerful mechanical arms.',
      weakness: 'Overconfidence, tech dependency',
      image: 'https://www.shutterstock.com/shutterstock/photos/2713051325/display_1500/stock-photo-dr-octopus-doc-oc-from-the-spiderman-series-he-s-menacing-and-furious-2713051325.jpg',
      bgColor: '#2a2520'
    },
    {
      name: 'Venom',
      threat: 'Extreme',
      description: 'Anti-hero/villain with intense strength and resilience.',
      weakness: 'Sound frequencies, fire',
      image: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ23e9VK0jKEEHPlH3BRjPelNu8vWKalQr5-N-fmcXASqAMkueA_JJpUyHANE58iRZWij0_7pwlv7bEUlpidzbzv_DNFqVlvdvh2.jpg?r=065',
      bgColor: '#000000'
    },
    {
      name: 'Electro',
      threat: 'High',
      description: 'High voltage threats—environment matters.',
      weakness: 'Water, insulation, power overload',
      image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/11/Amazing-Spider-Man-2-Electro-Death-No-Way-Home-Return-Setup-SR.jpg?w=1600&h=1200&fit=crop',
      bgColor: '#1a2530'
    },
    {
      name: 'Sandman',
      threat: 'Medium',
      description: 'Shape-shifting sand form makes him hard to contain.',
      weakness: 'Water, extreme temperatures',
      image: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/09/spider-man-3-thomas-haden-church-sandman.jpg?w=1200&h=675&fit=crop',
      bgColor: '#2a2520'
    },
    {
      name: 'Mysterio',
      threat: 'Medium',
      description: 'Master of illusions and psychological warfare.',
      weakness: 'Spider-sense, tech disruption',
      image: 'https://images7.alphacoders.com/116/1160713.jpg',
      bgColor: '#1a2a1a'
    },
    {
      name: 'Rhino',
      threat: 'High',
      description: 'Brute force in a reinforced armored suit—unstoppable momentum.',
      weakness: 'Limited agility, suit dependency',
      image: 'https://img.goodfon.com/wallpaper/big/2/cb/game-igra-playstation-4-ps4-insomniac-games-marvels-spider-m.webp',
      bgColor: '#3a3a3a'
    },
    {
      name: 'Kraven the Hunter',
      threat: 'Extreme',
      description: 'Master tracker and hunter with enhanced abilities and tactical genius.',
      weakness: 'Obsession with the hunt, pride',
      image: 'https://www.denofgeek.com/wp-content/uploads/2024/12/Aaron-Taylor-Johnson-in-Kraven-the-Hunter-Review.jpg?fit=2000%2C1158&w=1200&h=630&crop=1',
      bgColor: '#2a2015'
    },
    {
      name: 'Vulture',
      threat: 'High',
      description: 'Aerial combat specialist with advanced flight suit and weaponry.',
      weakness: 'Suit power limitations, age',
      image: 'https://wallpapercave.com/wp/wp10145937.jpg',
      bgColor: '#1a2a1a'
    },
    {
      name: 'Scorpion',
      threat: 'High',
      description: 'Enhanced strength and agility with a deadly mechanical tail.',
      weakness: 'Mental instability, tail vulnerability',
      image: 'https://wallpapercave.com/wp/wp15341583.jpg',
      bgColor: '#2a3a1a'
    },
    {
      name: 'Morbius',
      threat: 'Medium',
      description: 'Living vampire with superhuman abilities and bloodlust.',
      weakness: 'Need for blood, sunlight sensitivity',
      image: 'https://images8.alphacoders.com/132/1321825.jpeg',
      bgColor: '#2a1a1a'
    },
    {
      name: 'Jackal',
      threat: 'Medium',
      description: 'Genetic engineering genius capable of creating clones and mutations.',
      weakness: 'Physical combat, obsession with cloning',
      image: 'https://cdn.marvel.com/content/2x/1353jmw_com_mas_mob_01.png',
      bgColor: '#2a2a1a'
    }
  ];

  const getThreatColor = (threat) => {
    switch(threat) {
      case 'Extreme': return '#D32F2F';
      case 'High': return '#F9A825';
      case 'Medium': return '#1E88E5';
      default: return '#666';
    }
  };

  return (
    <div className="container">
      <div className="section-header">
        <h2>Enemy Database</h2>
        <p>Know your threats. Understand their patterns. Stay one step ahead.</p>
      </div>

      <div className="card-grid">
        {villains.map((villain, index) => (
          <div key={index} className="card villain-card">
            <div 
              className="card-image" 
              style={{ 
                background: villain.image ? `url(${villain.image})` : villain.gradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: villain.bgColor || (villain.image ? '#000000' : 'transparent'),
                cursor: villain.image ? 'pointer' : 'default'
              }}
              onClick={() => villain.image && setSelectedImage(villain.image)}
            >
              {villain.emoji && <span style={{ fontSize: '5rem', zIndex: 1 }}>{villain.emoji}</span>}
            </div>
            <span className="card-badge" style={{ backgroundColor: getThreatColor(villain.threat) }}>
              {villain.threat}
            </span>
            <div className="card-content">
              <h3>{villain.name}</h3>
              <p>{villain.description}</p>
              <div style={{ 
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(249, 168, 37, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                border: '1px solid rgba(249, 168, 37, 0.3)'
              }}>
                <p style={{ fontSize: '0.9rem', color: '#FFB74D', margin: 0 }}>
                  <strong>⚠️ Weakness:</strong> {villain.weakness}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(211, 47, 47, 0.9)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              zIndex: 10000
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(211, 47, 47, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(211, 47, 47, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕
          </button>
          <img 
            src={selectedImage} 
            alt="Villain preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 50px rgba(211, 47, 47, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="glass-box" style={{ 
        marginTop: '4rem',
        textAlign: 'center',
        background: 'rgba(211, 47, 47, 0.1)',
        border: '1px solid rgba(211, 47, 47, 0.3)'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white', textShadow: '0 0 20px rgba(211, 47, 47, 0.8)' }}>
          ⚠️ THREAT ASSESSMENT
        </h2>
        <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
          Every villain has a weakness. Every fight has a strategy. 
          Intelligence beats strength. Preparation beats power.
        </p>
      </div>
    </div>
  );
}

export default Villains;
