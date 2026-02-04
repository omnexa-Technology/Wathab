/**
 * Paragraph Atom
 * Reusable text paragraph with variant support
 */

export function Paragraph({
  variant = 'text-32regular',
  children,
  className = '',
  ...props
}) {
  // Map variants to CSS variable font classes
  const variantClasses = {
    'text-32regular': 'font-text-32regular text-[length:var(--text-32regular-font-size)] font-[number:var(--text-32regular-font-weight)] tracking-[var(--text-32regular-letter-spacing)] leading-[var(--text-32regular-line-height)] [font-style:var(--text-32regular-font-style)]',
    'text-24regular': 'font-text-24regular text-[length:var(--text-24regular-font-size)] font-[number:var(--text-24regular-font-weight)] tracking-[var(--text-24regular-letter-spacing)] leading-[var(--text-24regular-line-height)] [font-style:var(--text-24regular-font-style)]',
    'text-20regular': 'font-text-20regular text-[length:var(--text-20regular-font-size)] font-[number:var(--text-20regular-font-weight)] tracking-[var(--text-20regular-letter-spacing)] leading-[var(--text-20regular-line-height)] [font-style:var(--text-20regular-font-style)]',
    'body': 'font-body text-[length:var(--body-font-size)] font-[number:var(--body-font-weight)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]',
  };

  return (
    <p
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
