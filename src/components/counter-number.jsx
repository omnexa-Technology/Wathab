'use client';


export function CounterNumber({ value, size = 'xl', prefix = '', className = '', ...props }) {
  const sizeClasses = {
    sm: 'text-xl font-bold',
    md: 'text-2xl font-bold',
    lg: 'text-3xl font-bold',
    xl: 'text-4xl font-bold',
  };
  const sizeClass = sizeClasses[size] || sizeClasses.xl;

  return (
    <span
      className={`tabular-nums text-black ${sizeClass} ${className}`}
      {...props}
    >
      {prefix}
      {value}
    </span>
  );
}
