'use client';


export function CarouselPaginationDot({
  active = false,
  onClick,
  index,
  ariaLabel,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={active ? 'true' : 'false'}
      className={`
        transition-all duration-300
        ${active
          ? 'w-3.5 h-10 bg-[var(--color-carousel-active)] rounded-[64px]'
          : 'w-4 h-4 rounded-lg border border-solid border-[var(--color-carousel-inactive)]'
        }
        ${className}
      `}
      {...props}
    />
  );
}
