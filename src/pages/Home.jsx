import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import heroVideo from '../assets/Spiderman Hero.mp4';
import spidermanLogo from '../assets/Spiderman-Logo.png';

function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState({});
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section className="hero">
        {/* Fallback gradient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0a0f 50%, #0a0e1a 100%)',
          zIndex: 0
        }}></div>
        
        <video 
          ref={videoRef}
          autoPlay 
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <img 
              src={spidermanLogo} 
              alt="Spider-Man"
              className="hero-logo"
              style={{
                animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1), float 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>
        
        <button 
          onClick={toggleMute}
          className="mute-button"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(211, 47, 47, 0.9)';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(211, 47, 47, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 14, 26, 0.8)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
          }}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </section>

      <div className="container">
        <div 
          className="card-grid" 
          data-animate 
          id="cards-section"
          style={{
            opacity: isVisible['cards-section'] ? 1 : 0,
            transform: isVisible['cards-section'] ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="card" style={{ animationDelay: '0.1s' }}>
            <div className="card-image" style={{ 
              backgroundImage: 'url(https://i.pinimg.com/736x/58/cf/5f/58cf5f7a5606689e3190f9debc5f1912.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <div className="card-content">
              <h3>Origin & Values</h3>
              <p>Spider-Man is more than a hero—he's a symbol of doing the right thing, even when it's hard.</p>
              <Link to="/about" className="card-link">Learn More →</Link>
            </div>
          </div>

          <div className="card" style={{ animationDelay: '0.2s' }}>
            <div className="card-image" style={{ 
              backgroundImage: 'url(https://www.experienceperception.com/wp-content/uploads/Case-Studies/Spiderman-FFH/ffh-banner-test-5-uai-1873x1054.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <div className="card-content">
              <h3>Suits & Tech</h3>
              <p>Explore iconic suits, web shooters, and cutting-edge technology that makes Spider-Man unstoppable.</p>
              <Link to="/suits" className="card-link">View Gallery →</Link>
            </div>
          </div>

          <div className="card" style={{ animationDelay: '0.3s' }}>
            <div className="card-image" style={{ 
              backgroundImage: 'url(https://cdn.nerdist.com/wp-content/uploads/2023/06/01092424/Across-the-Spider-Verse-Multiverse.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>
            <div className="card-content">
              <h3>Spider-Verse</h3>
              <p>Discover different Spider-people and key moments across multiple dimensions and timelines.</p>
              <Link to="/movies" className="card-link">Explore Movies →</Link>
            </div>
          </div>
        </div>

        <div 
          className="glass-box" 
          data-animate
          id="cta-section"
          style={{ 
            marginTop: '5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible['cta-section'] ? 1 : 0,
            transform: isVisible['cta-section'] ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="web-pattern"></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="cta-heading">
              RESPONSIBILITY IN MOTION
            </h2>
            <p className="cta-text">
              Move fast. Protect people. Leave no mess.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
