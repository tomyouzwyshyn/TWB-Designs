import * as React from 'react';
import { CustodyStrip } from '@twb/design-system';

export const ThreeWindows = () => <CustodyStrip />;

export const SingleTransfer = () => (
  <CustodyStrip windows={1} zeroText="Zero windows — inside your perimeter" />
);
