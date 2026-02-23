'use client';

/**
 * AboutActions Molecule
 * Action buttons group for the About section
 */

import { ActionButton } from '../../../components/atoms/ActionButton/ActionButton';
import { ArrowRight, Download } from 'lucide-react';

export function AboutActions({
  primaryLabel,
  secondaryLabel,
  className = ''
}) {
  return (
    <div className={`inline-flex items-start gap-6 ${className}`}>
      {/* First Link - About Page */}
      <ActionButton
        href="/about"
        variant="primary"
        icon={Download}
        iconPosition="start"
      >
        {primaryLabel}
      </ActionButton>

      {/* Second Link - Services Page */}
      <ActionButton
        href="/services"
        variant="outline"
        icon={ArrowRight}
        iconPosition="start"
      >
        {secondaryLabel}
      </ActionButton>
    </div>
  );
}
