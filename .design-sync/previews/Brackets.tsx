import * as React from 'react';
import { Brackets } from '@twb/design-system';

/** Brackets are never used alone — they mark a surface. This shows the motif at rest. */
export const OnASurface = () => (
  <div className="card marked" style={{ maxWidth: 320 }}>
    <Brackets />
    <h3>Bracketed surface</h3>
    <p>Corner brackets sit 3px outside the box on two adjacent sides per corner.</p>
  </div>
);

export const OnAButton = () => (
  <a className="btn" href="#" style={{ display: 'inline-block' }}>
    Bracketed control
    <Brackets />
  </a>
);
