import ExperienceCard from './ExperienceCard';
import experienceData from '../../data/experience.json';

const WorkExperience = () => {
  return (
    <section id="experience">
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
            Work Experience
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-primary)',
            }}
          />
        </div>

        {/* Experience Timeline */}
        <div style={{ maxWidth: 'var(--max-width-content)' }}>
          {experienceData.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} isLast={index === experienceData.experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
