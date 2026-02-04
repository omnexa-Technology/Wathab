'use client';

import { Icon } from '@/components/atoms/Icon/Icon';

export function SearchButton({ onClick, className = '', ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Search"
      className={`p-icon rounded-md  transition-colors duration-200 flex items-center justify-center ${className}`}
      {...props}
    >
      <Icon name="search" size={24} className="fill-white" />
    </button>
  );
}
