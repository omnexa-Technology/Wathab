/**
 * GreenDotsDecoration Atom
 * Green dots decoration component (circle + rounded rectangle)
 */

export function GreenDotsDecoration({ className = '' }) {
  return (
    <div className={`inline-flex h-2 items-center gap-1 relative flex-[0_0_auto] ${className}`}>
      <div className="relative w-2 h-2 bg-[#86ba41] rounded-3xl aspect-[1]" />
      <div className="relative w-16 h-2 bg-[#86ba41] rounded-sm" />
    </div>
  );
}
