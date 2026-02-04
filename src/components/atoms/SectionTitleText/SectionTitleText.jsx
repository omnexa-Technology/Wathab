/**
 * SectionTitleText Atom
 * Section title with RTL support and design tokens
 */

export function SectionTitleText({ children, className = '' }) {
  return (
    <h2
      className={`relative w-fit mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] text-left tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--h2-font-style)] ${className}`}
    >
      {children}
    </h2>
  );
}
