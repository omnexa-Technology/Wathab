export function FormField({ label, children, ...props }) {
  return (
    <div {...props}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
}
