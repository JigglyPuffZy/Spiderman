import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/suits', label: 'Suits' },
    { path: '/villains', label: 'Villains' },
    { path: '/movies', label: 'Movies' }
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`navbar ${scrolled || !isHomePage ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo-wrapper">
          <div className="nav-logo">
            <img 
              src="https://cdn.freebiesupply.com/logos/large/2x/spider-man-4-logo-png-transparent.png" 
              alt="Spider-Man"
            />
          </div>
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="nav-toggle-icon"></span>
          <span className="nav-toggle-icon"></span>
          <span className="nav-toggle-icon"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
