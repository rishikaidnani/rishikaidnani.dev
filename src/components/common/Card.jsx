const Card = ({ children, className = '', hover = false, onClick }) => {
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`bg-bg-card border border-border-color rounded-lg p-6 shadow-soft ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
