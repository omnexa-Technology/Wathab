/**
 * ValueIcon Atom
 * Simple image wrapper for displaying value icons (touch-friendly on mobile)
 */

export function ValueIcon({ src, alt, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#E8F0EB] w-20 h-20 min-w-[5rem] min-h-[5rem] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 shrink-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 aspect-square object-contain"
      />
    </div>
  );
}
