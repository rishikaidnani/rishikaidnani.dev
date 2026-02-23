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

const AboutMe = () => {
  return (
    <section id="about">
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
            Building Data Foundations at Netflix
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-primary)',
              marginBottom: 'var(--space-3)',
            }}
          />
          <p
            style={{
              fontSize: 'var(--font-body-sm)',
              color: 'var(--accent-primary)',
              letterSpacing: 'var(--tracking-wide)',
              fontWeight: 500,
            }}
          >
            10+ Years of Experience
          </p>
        </div>

        <div
          className="space-y-6"
          style={{
            maxWidth: 'var(--max-width-content)',
            borderLeft: '3px solid var(--accent-primary)',
            paddingLeft: 'var(--space-6)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--font-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: '#E0E0E0',
            }}
          >
            What started as an engineering degree and a curiosity for how systems work
            eventually led me to data — and I've been hooked ever since. I love understanding
            what the data actually means, where it comes from, and digging into it until it
            tells you something real. That curiosity is what drew me in, and over the past
            decade it's taken me from writing my first ETL job to building the data foundations
            behind products used by millions.
          </p>
          <p
            style={{
              fontSize: 'var(--font-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: '#E0E0E0',
            }}
          >
            At Netflix, I get to work on the kind of problems I find most exciting — the ones
            where good data directly shapes what ships to users. Which devices can handle this
            feature? How many people can we actually reach? What happens if we roll this out
            globally? These are the questions that get me out of bed in the morning.
          </p>
          <p
            style={{
              fontSize: 'var(--font-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: '#E0E0E0',
            }}
          >
            My expertise spans Big Data technologies, Apache Spark, ETL pipelines,
            and data modeling — the tools and thinking that turn messy, scattered data
            into something teams can actually trust and act on.
          </p>
        </div>

        {/* Tools I Work With */}
        <div style={{ marginTop: 'var(--space-8)' }}>
          <h3
            className="font-semibold"
            style={{
              fontSize: 'var(--font-h3)',
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Tools I Work With
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            {techItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: 'var(--space-3) var(--space-4)',
                    minWidth: '90px',
                  }}
                >
                  <Icon size={32} style={{ color: 'var(--accent-primary)' }} />
                  <span
                    style={{
                      fontSize: 'var(--font-caption)',
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
      </div>
    </section>
  );
};

export default AboutMe;
