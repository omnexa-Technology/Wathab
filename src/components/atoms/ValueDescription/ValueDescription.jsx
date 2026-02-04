/**
 * ValueDescription Atom
 * Displays the value description text with proper styling
 */

export function ValueDescription({ children, className = '' }) {
  return (
    <p
      className={`font-text-20regular font-[number:var(--text-20regular-font-weight)] text-[#eaeaea] text-[length:var(--text-20regular-font-size)] leading-[var(--text-20regular-line-height)] relative self-stretch text-center tracking-[var(--text-20regular-letter-spacing)] [direction:rtl] [font-style:var(--text-20regular-font-style)] ${className}`}
    >
      {children}
    </p>
  );
}
