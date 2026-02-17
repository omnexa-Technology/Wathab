/**
 * ValueIcon Atom
 * Simple image wrapper for displaying value icons (touch-friendly on mobile)
 */

export function ValueIcon({ src, alt, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#E8F0EB] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 aspect-square object-contain"
      />
    </div>
  );
}
