import * as React from 'react';
import { Chip } from '@twb/design-system';

export const Held = () => <Chip status="held">Registered</Chip>;
export const Pending = () => <Chip status="pending">In progress</Chip>;
export const NotApplicable = () => <Chip status="na">Requires US entity</Chip>;

export const DisclosureRow = () => (
  <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
    <Chip status="held">Approved</Chip>
    <Chip status="pending">Commissioned</Chip>
    <Chip status="pending">Engagement underway</Chip>
    <Chip status="na">Requires US entity</Chip>
  </div>
);
