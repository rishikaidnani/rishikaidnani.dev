import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'rishikaidnani',
      link: 'https://github.com/rishikaidnani',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'rishikaidnani',
      link: 'https://www.linkedin.com/in/rishikaidnani/',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rishika.r.idnani@gmail.com',
      link: 'mailto:rishika.r.idnani@gmail.com',
    },
  ];

  return (
    <section id="contact">
      <div className="mx-auto w-full" style={{ maxWidth: 'var(--max-width-content)' }}>
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <h2
            className="font-bold"
            style={{
              fontSize: 'var(--font-h1)',
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Contact
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-primary)',
            }}
          />
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-8)' }}>
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center rounded-xl group"
                style={{
                  padding: 'var(--space-8)',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-emphasis)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Icon
                  size={40}
                  style={{
                    color: 'var(--accent-primary)',
                    marginBottom: 'var(--space-3)',
                    transition: 'color 0.2s ease'
                  }}
                  className="group-hover:text-accent-hover"
                />
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--font-h4)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  {method.label}
                </h3>
                <p
                  className="text-center break-all"
                  style={{
                    fontSize: 'var(--font-body-sm)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
