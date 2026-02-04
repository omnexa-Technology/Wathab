'use client';

import { Icon } from '@/components/atoms/Icon/Icon';

export function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-xs">
      <span className="text-headnav text-neutral-200 font-normal">{text}</span>
      <div className="w-icon-size h-icon-size flex items-center justify-center flex-shrink-0">
        <Icon name={icon} size={24} />
      </div>
    </div>
  );
}
