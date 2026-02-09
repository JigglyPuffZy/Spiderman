import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Suits from './pages/Suits';
import Villains from './pages/Villains';
import TechLab from './pages/TechLab';
import DailyBugle from './pages/DailyBugle';
import Movies from './pages/Movies';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      {isLoading && <LoadingScreen />}
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/suits" element={<Suits />} />
            <Route path="/villains" element={<Villains />} />
            <Route path="/tech-lab" element={<TechLab />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/daily-bugle" element={<DailyBugle />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Watermark */}
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            background: 'rgba(10, 14, 26, 0.85)',
            backdropFilter: 'blur(20px)',
            padding: '0.75rem 1.25rem',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 998,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(211, 47, 47, 0.9)';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(211, 47, 47, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 14, 26, 0.85)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '1rem',
              filter: 'drop-shadow(0 0 8px rgba(211, 47, 47, 0.6))'
            }}>
              🕷️
            </span>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.125rem'
            }}>
              <span style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                lineHeight: 1
              }}>
                Fan Made Website
              </span>
              <span style={{
                fontSize: '0.875rem',
                color: '#fff',
                fontWeight: '700',
                letterSpacing: '-0.01em',
                lineHeight: 1
              }}>
                Ralph Matthew Punzalan
              </span>
            </div>
          </div>
        </div>
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D32F2F, #B71C1C)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(211, 47, 47, 0.5)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 999,
              backdropFilter: 'blur(10px)',
              animation: 'fadeIn 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(211, 47, 47, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(211, 47, 47, 0.5)';
            }}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
