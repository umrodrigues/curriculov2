import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedSection = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  duration = 1000,
  className = '' 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all';
    const durationClass = `duration-${duration}`;
    
    switch (animation) {
      case 'fade-in':
        return `${baseClasses} ${durationClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'slide-in-left':
        return `${baseClasses} ${durationClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
      case 'slide-in-right':
        return `${baseClasses} ${durationClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
      case 'scale-in':
        return `${baseClasses} ${durationClass} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      default:
        return `${baseClasses} ${durationClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};
