/**
 * ValueIcon Atom
 * Simple image wrapper for displaying value icons
 */

export function ValueIcon({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`relative w-24 h-24 aspect-[1] ${className}`}
    />
  );
}
