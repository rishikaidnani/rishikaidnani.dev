import BlogCard from './BlogCard';
import blogsData from '../../data/blogs.json';

const BlogGrid = () => {
  return (
    <section id="blogs">
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
            Tech Blogs
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-primary)',
            }}
          />
        </div>

        {/* Blog Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--card-gap)' }}>
          {blogsData.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
