/**
 * ValueIcon Atom
 * Simple image wrapper for displaying value icons
 */

export function ValueIcon({ src, alt, className = '' }) {
  return (
    <div className="w-40 h-40 bg-[#E8F0EB] rounded-full flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className={` relative w-24 h-24 aspect-[1] ${className}`}
      />
    </div>
  );
}
