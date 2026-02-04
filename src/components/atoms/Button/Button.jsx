export function Button({ children, type = 'button', onClick, ...props }) {
  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
