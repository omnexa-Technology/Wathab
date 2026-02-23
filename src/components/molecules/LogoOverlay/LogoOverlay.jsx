
import Image from 'next/image';

export function LogoOverlay({
  logoTextSrc = '/assets/icons/logo/logo-Dark1.svg',
  logoIconSrc,
  logoTextAlt = 'Company Logo',
  className = ''
}) {
  return (
    <div className={`bg-white/30 backdrop-blur-sm absolute bottom-0 rounded-3xl h-24 flex w-full items-center justify-center gap-3 z-20 mx-0 ${className}`}>
      <Image
        className="w-[278.46px] h-auto"
        alt={logoTextAlt}
        src={logoTextSrc}
        width={278}
        height={67}
        loading="lazy"
      />
      {logoIconSrc && (
        <div className="w-[70.17px] h-[67.99px]">
          <Image
            className="w-full h-full object-contain"
            alt="Logo decoration"
            src={logoIconSrc}
            width={70}
            height={68}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
