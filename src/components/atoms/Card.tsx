import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick
}: CardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'default':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700';
      case 'elevated':
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-xl';
      case 'outlined':
        return 'bg-transparent border-2 border-zinc-600';
      case 'glass':
        return 'bg-white/10 backdrop-blur-md border border-white/20';
      default:
        return 'bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700';
    }
  };

  const baseClasses = `
    rounded-xl p-6
    transition-all duration-300
    ${getVariantClasses()}
    ${hover ? 'hover:scale-105 hover:border-zinc-600 hover:shadow-xl' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
};
