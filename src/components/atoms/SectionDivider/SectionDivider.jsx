export function SectionDivider({ className = '', ...props }) {
  return (
    <div className={`inline-flex items-start gap-1 ${className}`} aria-hidden {...props}>
      <div className="w-1 h-1 bg-[#86ba41] rounded-sm shrink-0" />
      <div className="w-9 sm:w-[45px] h-1 bg-[#86ba41] rounded-sm shrink-0" />
    </div>
  );
}
