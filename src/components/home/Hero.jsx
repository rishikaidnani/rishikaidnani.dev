import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="hero-grid mx-auto w-full"
        style={{ maxWidth: 'var(--max-width-content)' }}
      >
        {/* Left: Text */}
        <div className="space-y-5">
          <h1
            className="font-bold"
            style={{
              fontSize: '4.5rem',
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: '1.1',
            }}
          >
            Rishika Idnani
          </h1>
          <p
            className="font-semibold"
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: 'var(--font-h2)',
              color: 'var(--accent-primary)',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            Senior Data Engineer | Netflix
          </p>
          <p
            style={{
              fontSize: 'var(--font-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: '#7EC8E3',
              maxWidth: 'var(--max-width-readable)',
            }}
          >
            Making data more accessible, trustworthy, and actionable.
          </p>

          <div className="hero-socials" style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
            <a
              href="https://www.linkedin.com/in/rishikaidnani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/rishikaidnani"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <img
            src="/RI image.png"
            alt="Rishika Idnani"
            className="rounded-full object-cover"
            style={{
              width: '380px',
              height: '380px',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
