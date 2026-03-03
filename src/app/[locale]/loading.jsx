/**
 * Full-page loading UI for the [locale] segment.
 * Prevents locale flash during refresh, language switch, and route navigation
 * by showing a neutral overlay until the page content is ready.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className="h-12 w-12 rounded-full border-2 border-[#1B6936]/20 border-t-[#1B6936] animate-spin"
        aria-hidden
      />
    </div>
  );
}
