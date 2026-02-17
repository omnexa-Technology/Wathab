/**
 * ValueDescription Atom
 * Displays the value description text with proper styling
 */

export function ValueDescription({ children, className = '' }) {
  return (
    <p
      className={`font-din font-normal text-[#eaeaea] self-stretch text-center leading-relaxed tracking-normal [direction:rtl]
        text-sm
        sm:text-base sm:leading-7
        lg:text-[length:var(--text-20regular-font-size)] lg:leading-[var(--text-20regular-line-height)]
        ${className}`}
    >
      {children}
    </p>
  );
}
