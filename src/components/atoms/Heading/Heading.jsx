/**
 * Heading Atom
 * Reusable heading component with variant support
 */

export function Heading({
  level = 'h2',
  variant = 'h2',
  children,
  className = '',
  ...props
}) {


  return (
    <h2
      // className={`${variantClasses[variant]} ${className}`}
      className='text-5xl font-bold'
      {...props}
    >
      {children}
    </h2>
  );
}
