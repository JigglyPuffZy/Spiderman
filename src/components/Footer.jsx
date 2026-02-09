function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img 
          src="https://1000logos.net/wp-content/uploads/2017/06/Spiderman-Logo.png" 
          alt="Spider-Man"
          style={{ 
            width: '70px', 
            height: 'auto', 
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 4px 16px rgba(211, 47, 47, 0.6))',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotate(-5deg)';
            e.currentTarget.style.filter = 'drop-shadow(0 6px 24px rgba(211, 47, 47, 0.9))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.filter = 'drop-shadow(0 4px 16px rgba(211, 47, 47, 0.6))';
          }}
        />
        <p style={{ 
          fontSize: '1rem',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          A fan-made concept project. Built for design and development practice.
        </p>
        <ul className="footer-links">
          <li>
            <a 
              href="#"
              style={{
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a 
              href="#"
              style={{
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a 
              href="#"
              style={{
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              GitHub
            </a>
          </li>
        </ul>
        <p style={{ 
          fontSize: '0.875rem', 
          opacity: 0.6,
          marginTop: '2rem'
        }}>
          © 2026 Spider-Man Fan Site. Not affiliated with Marvel or Sony.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
