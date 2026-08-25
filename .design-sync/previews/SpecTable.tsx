import * as React from 'react';
import { SpecTable } from '@twb/design-system';

export const VaultSpecification = () => (
  <SpecTable rows={[
    { k: 'Maximum calibre', v: '.50 cal' },
    { k: 'Rated throughput', v: '60 lb/hr' },
    { k: 'Primary chamber', v: '~850 °F' },
    { k: 'Afterburner', v: '~1,750 °F' },
    { k: 'Towing weight', v: '11,500 lb' },
    { k: 'Trailer length', v: '26 ft' },
    { k: 'Minimum standoff', v: '750 ft' },
    { k: 'Operators required', v: '2' },
  ]} />
);

export const RegistrationStatus = () => (
  <SpecTable headK="Item" headV="Status" rows={[
    { k: 'NAICS — primary', v: '333999' },
    { k: 'PSC', v: '1385 — EOD tools' },
    { k: 'PSC', v: '1305 · 1310 — ammunition' },
    { k: 'PSC', v: 'F108 — haz. disposal' },
  ]} />
);
