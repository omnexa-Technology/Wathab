'use client';

import Link from 'next/link';


export function ActionButton({
  href = '#',
  variant = 'primary',
  icon: Icon,
  iconPosition = 'end',
  children,
  className = '',
  ...props
}) {
  const variantStyles = {
    primary: 'h-auto bg-[#1b6936] hover:bg-[#1b6936]/90 transition-colors duration-200',
    outline: 'h-auto border-2 border-[#1b6936] bg-transparent hover:bg-[#1b6936]/10 transition-colors duration-200',
  };

  const iconColorClasses = {
    primary: 'text-white',
    outline: 'text-[#1b6936]',
  };

  const textColorClasses = {
    primary: 'text-white',
    outline: 'text-[#1b6936]',
  };

  const textFontClasses = {
    primary: 'font-text-20bold font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] [font-style:var(--text-20bold-font-style)]',
    outline: 'font-text-20regular font-[number:var(--text-20regular-font-weight)] text-[length:var(--text-20regular-font-size)] tracking-[var(--text-20regular-letter-spacing)] leading-[var(--text-20regular-line-height)] [font-style:var(--text-20regular-font-style)]',
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center gap-4 px-6 py-2.5 rounded-[32px]
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === 'start' && (
        <Icon className={`w-8 h-8 ${iconColorClasses[variant]}`} aria-hidden="true" />
      )}

      <span className={`${textColorClasses[variant]} ${textFontClasses[variant]} whitespace-nowrap`}>
        {children}
      </span>

      {Icon && iconPosition === 'end' && (
        <Icon className={`w-8 h-8 ${iconColorClasses[variant]}`} aria-hidden="true" />
      )}
    </Link>
  );
}
