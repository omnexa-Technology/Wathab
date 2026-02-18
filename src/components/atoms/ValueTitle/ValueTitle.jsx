/**
 * ValueTitle Atom
 * Displays the value title with proper typography and design tokens
 */

export function ValueTitle({ children, className = '' }) {
  return (
    <h3
      className={`font-din font-semibold text-white self-stretch text-center tracking-normal [direction:rtl] [font-style:var(--h4-font-style)]
        text-xl leading-snug
        sm:text-2xl sm:leading-tight
        md:text-3xl md:leading-snug
        lg:text-4xl lg:leading-[var(--h4-line-height)]
        ${className}`}
    >
      {children}
    </h3>
  );
}
