import React from 'react';

export default function Section({ children }: { children: React.ReactNode }) {
  return <section className="m-4">{children}</section>;
}
