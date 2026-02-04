/**
 * CardTitle Atom
 * Displays card title with h3 design tokens and RTL support
 */

export function CardTitle({
  children,
  className = '',
  ...props
}) {
  return (
    <h3
      className={`text-white text-[length:var(--h3-font-size)] leading-[var(--h3-line-height)] w-full rotate-180 font-h3 font-[number:var(--h3-font-weight)] tracking-[var(--h3-letter-spacing)] [direction:rtl] [font-style:var(--h3-font-style)] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
