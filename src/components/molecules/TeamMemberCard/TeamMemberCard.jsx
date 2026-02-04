'use client';

import Image from 'next/image';

/**
 * TeamMemberCard - Displays a team member with photo and name
 * @param {Object} props
 * @param {string} props.imageSrc - Path to member photo
 * @param {string} props.name - Member name
 * @param {string} props.role - Member role/position
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function TeamMemberCard({
  imageSrc,
  name,
  role,
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex flex-col items-center gap-6 ${className}`}
      {...props}
    >
      {/* Member Photo */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-din font-medium text-2xl leading-normal text-center text-[#0b2c16]">
          {name}
        </h3>
        <p className="font-din font-normal text-xl leading-normal text-center text-[#595959]">
          {role}
        </p>
      </div>
    </div>
  );
}
