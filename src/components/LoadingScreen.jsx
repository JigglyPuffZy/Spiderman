import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0a0f 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      opacity: progress === 100 ? 0 : 1,
      transition: 'opacity 0.5s ease',
      pointerEvents: progress === 100 ? 'none' : 'all'
    }}>
      <img 
        src="https://1000logos.net/wp-content/uploads/2017/06/Spiderman-Logo.png"
        alt="Spider-Man"
        style={{
          width: '200px',
          height: 'auto',
          marginBottom: '3rem',
          filter: 'drop-shadow(0 0 40px rgba(211, 47, 47, 0.8))',
          animation: 'pulse 2s ease-in-out infinite'
        }}
      />
      
      <div style={{
        width: '300px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '100px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #D32F2F, #EF5350)',
          borderRadius: '100px',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 20px rgba(211, 47, 47, 0.8)'
        }}></div>
      </div>
      
      <p style={{
        marginTop: '1.5rem',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.875rem',
        fontWeight: '600',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        Loading... {progress}%
      </p>
    </div>
  );
}

export default LoadingScreen;
