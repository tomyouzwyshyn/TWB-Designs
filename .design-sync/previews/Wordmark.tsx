import * as React from 'react';
import { Wordmark } from '@twb/design-system';

export const Header = () => <Wordmark size="header" />;

export const OnDarkGround = () => (
  <div style={{ background: 'var(--ink)', padding: '2.25rem' }}>
    <Wordmark size="header" white />
  </div>
);

/** The footer signature. Scaled to sit inside the card without cropping. */
export const Signature = () => (
  <div style={{ fontSize: '.5rem' }}>
    <Wordmark size="signature" descriptor="Property destruction · Hamilton, Ontario" />
  </div>
);
