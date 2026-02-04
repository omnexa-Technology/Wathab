/**
 * CardDescription Atom
 * Displays card description with text-32regular design tokens and RTL support
 */

export function CardDescription({
  children,
  className = '',
  ...props
}) {
  return (
    <p
      className={`text-foundation-greylight-active text-[length:var(--text-32regular-font-size)] leading-[var(--text-32regular-line-height)] w-full rotate-180 font-text-32regular font-[number:var(--text-32regular-font-weight)] tracking-[var(--text-32regular-letter-spacing)] [direction:rtl] [font-style:var(--text-32regular-font-style)] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
