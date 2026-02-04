'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Navigation button for carousel (previous/next)
 * @param {Object} props
 * @param {'prev' | 'next'} [props.direction='next'] - Button direction
 * @param {() => void} [props.onClick] - Click handler
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.ariaLabel] - Accessibility label
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function CarouselNavButton({
  direction = 'next',
  onClick,
  disabled = false,
  ariaLabel,
  className = '',
  ...props
}) {
  const Icon = direction === 'next' ? ChevronRight : ChevronLeft;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        w-12 h-12 rounded-full 
        bg-[var(--color-carousel-nav-bg)] 
        hover:bg-[var(--color-carousel-nav-hover)]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      <Icon className="w-6 h-6 text-white" />
    </button>
  );
}
