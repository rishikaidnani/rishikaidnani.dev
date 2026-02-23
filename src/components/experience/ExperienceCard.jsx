const ExperienceCard = ({ experience, isLast }) => {
  const { position, company, duration, techStack, impact } = experience;

  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-6)',
        paddingBottom: 'var(--space-8)',
      }}
    >
      {/* Timeline line + dot */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '20px',
        }}
      >
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            flexShrink: 0,
            marginTop: '6px',
          }}
        />
        {!isLast && (
          <div
            style={{
              width: '2px',
              flexGrow: 1,
              backgroundColor: 'var(--border-subtle)',
              marginTop: '8px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          className="font-semibold"
          style={{
            fontSize: 'var(--font-h3)',
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}
        >
          {position}
        </h3>
        <p
          className="font-medium"
          style={{
            fontSize: 'var(--font-body)',
            color: 'var(--accent-primary)',
            marginBottom: '4px',
          }}
        >
          {company}
        </p>
        <p
          style={{
            fontSize: 'var(--font-body-sm)',
            color: 'var(--text-muted)',
          }}
        >
          {duration}
        </p>

        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap" style={{ gap: 'var(--space-1)', marginTop: 'var(--space-3)' }}>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-md"
                style={{
                  padding: '4px 10px',
                  fontSize: 'var(--font-caption)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {impact && impact.length > 0 && (
          <ul className="space-y-2" style={{ marginTop: 'var(--space-3)' }}>
            {impact.map((item, index) => (
              <li
                key={index}
                className="flex items-start"
                style={{
                  fontSize: 'var(--font-body-sm)',
                  color: '#E0E0E0',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                <span
                  style={{
                    color: 'var(--accent-primary)',
                    marginRight: 'var(--space-2)',
                    marginTop: '2px',
                    fontSize: '12px',
                  }}
                >
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
