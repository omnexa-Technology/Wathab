/**
 * ValueIconContainer Atom
 * Wraps complex icons with background color and rounded styling
 */

export function ValueIconContainer({ children, bgColor = 'bg-[#e8f0eb]', className = '' }) {
  return (
    <div
      className={`flex items-center justify-center gap-2.5 p-2.5 ${bgColor} rounded-[96px] relative w-24 h-24 aspect-[1] ${className}`}
    >
      {children}
    </div>
  );
}
