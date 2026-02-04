export function SectionDivider({ className = '', ...props }) {
  return (
    <div className={`inline-flex items-start gap-1 ${className}`} {...props}>
      <div className="w-1 h-1 bg-[#86ba41] rounded-sm" />
      <div className="w-[45px] h-1 bg-[#86ba41] rounded-sm" />
    </div>
  );
}
