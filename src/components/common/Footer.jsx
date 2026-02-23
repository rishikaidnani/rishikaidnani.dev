const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'var(--space-6)',
        paddingBottom: 'var(--space-6)',
        marginTop: 'var(--space-20)'
      }}
    >
      <div
        className="mx-auto px-6 text-center"
        style={{ maxWidth: 'var(--max-width-content)' }}
      >
        <p
          style={{
            fontSize: 'var(--font-body-sm)',
            color: 'var(--text-muted)'
          }}
        >
          © {currentYear} Rishika Idnani
        </p>
      </div>
    </footer>
  );
};

export default Footer;
