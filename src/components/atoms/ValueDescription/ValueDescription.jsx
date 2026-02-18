/**
 * ValueDescription Atom
 * Displays the value description text with proper styling
 */

export function ValueDescription({ children, className = '' }) {
  return (
    <p
      className={`font-din font-normal text-[#eaeaea] self-stretch text-center tracking-normal [direction:rtl]
        text-base leading-relaxed
        sm:leading-7
        md:text-base
        lg:text-[length:var(--text-20regular-font-size)] lg:leading-[var(--text-20regular-line-height)]
        ${className}`}
    >
      {children}
    </p>
  );
}
