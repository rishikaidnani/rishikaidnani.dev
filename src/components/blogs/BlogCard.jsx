import { FaArrowRight } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  const { title, url, overview } = blog;

  return (
    <div
      className="flex flex-col h-full"
      style={{
        border: '1px solid var(--border-subtle)',
        borderLeftWidth: '3px',
        borderLeftColor: 'var(--accent-primary)',
        borderRadius: '8px',
        padding: 'var(--space-6)',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-emphasis)';
        e.currentTarget.style.borderLeftColor = 'var(--accent-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.borderLeftColor = 'var(--accent-primary)';
      }}
    >
      <h3
        className="font-semibold"
        style={{
          fontSize: 'var(--font-h3)',
          color: 'var(--text-primary)',
          lineHeight: 'var(--leading-tight)',
          marginBottom: 'var(--space-3)',
        }}
      >
        {title}
      </h3>

      <p
        className="flex-grow"
        style={{
          fontSize: 'var(--font-body-sm)',
          color: '#E0E0E0',
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-4)',
        }}
      >
        {overview}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium group"
        style={{
          fontSize: 'var(--font-body-sm)',
          color: 'var(--accent-primary)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--accent-primary)';
        }}
      >
        Read More
        <FaArrowRight
          className="ml-2 group-hover:translate-x-1 transition-transform"
          size={12}
        />
      </a>
    </div>
  );
};

export default BlogCard;
