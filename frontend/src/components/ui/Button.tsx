import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-200 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0E13]
  `;

  const variantStyles = {
    primary: `
      bg-gradient-primary text-white
      hover:shadow-lg hover:shadow-purple-500/30
      focus:ring-purple-500
      active:scale-95
    `,
    secondary: `
      bg-[#21252E] text-white border border-[#3A3F4B]
      hover:bg-[#2A2F38] hover:border-[#4A4F5B]
      focus:ring-purple-500
      active:scale-95
    `,
    outline: `
      bg-transparent text-purple-400 border-2 border-purple-500/50
      hover:bg-purple-500/10 hover:border-purple-500
      focus:ring-purple-500
      active:scale-95
    `,
    ghost: `
      bg-transparent text-gray-300
      hover:bg-white/5 hover:text-white
      focus:ring-gray-500
      active:scale-95
    `,
    success: `
      bg-gradient-success text-white
      hover:shadow-lg hover:shadow-green-500/30
      focus:ring-green-500
      active:scale-95
    `,
    danger: `
      bg-red-500 text-white
      hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30
      focus:ring-red-500
      active:scale-95
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}