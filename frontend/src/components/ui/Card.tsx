import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'glass' | 'gradient' | 'bordered';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
  hover = false
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-[#21252E] border border-[#2D3139]',
    elevated: 'bg-[#21252E] border border-[#2D3139] shadow-lg',
    glass: 'glass',
    gradient: 'bg-gradient-primary border-0',
    bordered: 'bg-[#151921] border-2 border-[#3A3F4B]',
  };

  const hoverStyles = hover ? 'hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer' : '';

  return (
    <div
      className={`
        rounded-2xl overflow-hidden
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}