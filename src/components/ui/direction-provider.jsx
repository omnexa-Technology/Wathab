'use client';

import * as React from 'react';
import { DirectionProvider as RadixDirectionProvider } from '@radix-ui/react-direction';

export function DirectionProvider({ direction, children }) {
  return (
    <RadixDirectionProvider dir={direction}>
      {children}
    </RadixDirectionProvider>
  );
}
