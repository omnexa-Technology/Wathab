import Image from 'next/image';
export function Logo({ src = '/assets/icons/logo/logo-light.svg', alt = 'Wathb Logo', width = 120, height = 24, className = '', ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
