import * as React from 'react';
import { Button } from '@twb/design-system';

export const Primary = () => <Button variant="solid" href="contact.html">Make an enquiry</Button>;

export const Secondary = () => <Button href="contracting.html">Contracting &amp; compliance</Button>;

export const Small = () => <Button variant="solid" small href="contact.html">Enquire</Button>;

export const Pair = () => (
  <div style={{ display: 'flex', gap: '.875rem', flexWrap: 'wrap' }}>
    <Button variant="solid" href="custody.html">Custody protocol</Button>
    <Button href="contact.html">Request the capability statement</Button>
  </div>
);
