'use client';

/**
 * AccordionIcon - Icon for accordion expand/collapse
 * Atomic Design: Atom
 * @param {Object} props
 * @param {boolean} [props.isOpen=false] - Whether the accordion is open
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function AccordionIcon({ isOpen = false, className = '', ...props }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''} ${className}`}
      {...props}
    >
      <path
        d="M16 8V24M8 16H24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
