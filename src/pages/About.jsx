import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

function About() {
  return (
    <div className="container">
      <div className="section-header">
        <h2>The Hero</h2>
        <p>Move fast. Protect people. Leave no mess.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div style={{ 
            backgroundImage: `url(${image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '220px'
          }}>
          </div>
          <div className="card-content">
            <h3>Who is Spider-Man?</h3>
            <p>
              Spider-Man is a young hero balancing everyday life with protecting others. 
              He fights with agility, intelligence, and a strong moral compass.
            </p>
          </div>
        </div>

        <div className="card">
          <div style={{ 
            backgroundImage: `url(${image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '220px'
          }}>
          </div>
          <div className="card-content">
            <h3>Core Powers</h3>
            <p>
              Enhanced strength, reflexes, wall-crawling, spider-sense, and advanced problem-solving.
            </p>
          </div>
        </div>

        <div className="card">
          <div style={{ 
            backgroundImage: `url(${image3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '220px'
          }}>
          </div>
          <div className="card-content">
            <h3>The Code: Responsibility</h3>
            <p>
              Spider-Man's guiding principle: power should always serve people—especially those who can't protect themselves.
            </p>
          </div>
        </div>

        <div className="card">
          <div style={{ 
            backgroundImage: 'url(https://wallpapercave.com/wp/wp7718930.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '220px'
          }}>
          </div>
          <div className="card-content">
            <h3>Web-Shooters</h3>
            <p>
              Mechanical devices that shoot synthetic webbing. Used for swinging, trapping enemies, and creating shields. A signature tool of Spider-Man's genius.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-box" style={{ 
        marginTop: '4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="web-pattern"></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🕸️</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white', textShadow: '0 0 30px rgba(211, 47, 47, 0.8)' }}>
            Responsibility in Motion
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto' }}>
            Being Spider-Man means more than having powers. It's about making the right choice when no one's watching. 
            It's about protecting the city, one person at a time. Fast but thoughtful. Protective before aggressive.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: 'white', textShadow: '0 0 20px rgba(211, 47, 47, 0.5)' }}>
          Core Values
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="glass-box" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ color: '#D32F2F', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(211, 47, 47, 0.5)' }}>Protection First</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>People matter more than the fight.</p>
          </div>
          <div className="glass-box" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
            <h3 style={{ color: '#1E88E5', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(30, 136, 229, 0.5)' }}>Smart Decisions</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Fast doesn't mean reckless.</p>
          </div>
          <div className="glass-box" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ color: '#F9A825', marginBottom: '0.5rem', textShadow: '0 0 10px rgba(249, 168, 37, 0.5)' }}>Community</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>The city isn't a backdrop—it's the reason.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
