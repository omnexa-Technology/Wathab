

export function Indicator({ className = '' }) {
  return (
    <div
      className={`inline-flex h-2 items-end gap-1 relative flex-[0_0_auto] ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-2 h-2 bg-[#86ba41] rounded-full" />
      <div className="relative w-8 md:w-16 h-2 bg-[#86ba41] rounded-sm" />
    </div>
  );
}
