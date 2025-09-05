'use client';

import { useEffect } from 'react';

export default function DetailsAutoClose({
  rootId = 'site-nav',
}: {
  rootId?: string;
}) {
  useEffect(() => {
    const root = document.getElementById(rootId) ?? document;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      // Close any open <details> inside the root if the click/tap is outside
      const open = root.querySelectorAll<HTMLDetailsElement>('details[open]');
      open.forEach((d) => {
        if (!d.contains(target)) d.open = false;
      });
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const open = root.querySelectorAll<HTMLDetailsElement>('details[open]');
        open.forEach((d) => (d.open = false));
      }
    };

    document.addEventListener('click', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [rootId]);

  return null;
}
