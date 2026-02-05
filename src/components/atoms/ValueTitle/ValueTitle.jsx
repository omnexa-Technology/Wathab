/**
 * ValueTitle Atom
 * Displays the value title with proper typography and design tokens
 */

export function ValueTitle({ children, className = '' }) {
  return (
    <h4
      className={`mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-4xl font-semibold leading-[var(--h4-line-height)] relative self-stretch text-center tracking-[var(--h4-letter-spacing)] [direction:rtl] [font-style:var(--h4-font-style)] ${className}`}
    >
      {children}
    </h4>
  );
}
