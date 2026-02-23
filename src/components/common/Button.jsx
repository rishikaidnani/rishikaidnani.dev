const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const getVariantStyles = () => {
    if (disabled) {
      return { backgroundColor: '#64748B', color: '#CBD5E1', border: 'none' };
    }

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--accent-red)',
          color: 'white',
          border: 'none'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--accent-red)',
          border: '2px solid var(--accent-red)'
        };
      default:
        return {};
    }
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const hoverClass = !disabled && variant === 'primary' ? 'hover:brightness-110' :
                     !disabled && variant === 'outline' ? 'hover:bg-accent-red hover:bg-opacity-10' :
                     !disabled ? 'hover:opacity-80' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getVariantStyles()}
      className={`${baseStyles} ${sizes[size]} ${hoverClass} ${className} ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
