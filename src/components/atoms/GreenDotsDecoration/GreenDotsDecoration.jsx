/**
 * GreenDotsDecoration Atom
 * Green accent (circle + rounded rectangle) for section headings
 */

export function GreenDotsDecoration({ className = '' }) {
  return (
    <div
      className={`inline-flex h-1.5 sm:h-2 items-center gap-1 flex-shrink-0 ${className}`}
      aria-hidden
    >
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#86ba41] rounded-full shrink-0" />
      <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#86ba41] rounded-sm shrink-0" />
    </div>
  );
}
