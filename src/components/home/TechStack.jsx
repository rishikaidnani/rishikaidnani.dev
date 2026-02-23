import { SiApachespark, SiPython, SiApacheairflow } from 'react-icons/si';
import { FaDatabase, FaSnowflake, FaProjectDiagram, FaSitemap } from 'react-icons/fa';

const techItems = [
  { name: 'Apache Spark', icon: SiApachespark },
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Airflow', icon: SiApacheairflow },
  { name: 'Iceberg', icon: FaSnowflake },
  { name: 'Data Modeling', icon: FaProjectDiagram },
  { name: 'ETL', icon: FaSitemap },
];

const TechStack = () => {
  return (
    <section id="techstack" style={{ minHeight: 'auto', padding: 'var(--space-12) var(--space-6)' }}>
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
            Tech Stack
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-primary)',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 'var(--space-4)',
            justifyContent: 'center',
            padding: 'var(--space-6) 0',
          }}
        >
          {techItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="tech-stack-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: 'var(--space-3) var(--space-4)',
                  minWidth: '100px',
                }}
              >
                <Icon size={36} style={{ color: 'var(--accent-primary)' }} />
                <span
                  style={{
                    fontSize: 'var(--font-body-sm)',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--tracking-wide)',
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
