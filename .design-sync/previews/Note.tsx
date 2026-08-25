import * as React from 'react';
import { Note, Chip } from '@twb/design-system';

export const Default = () => (
  <Note>
    <p><strong>On throughput.</strong> Vault is rated at 60 lb/hr up to .50 calibre. We publish the hourly rate, not a daily figure — daily figures in this category assume shift lengths nobody runs.</p>
  </Note>
);

export const Signature = () => (
  <Note signature>
    <p><strong>What we do not claim.</strong> EPA has proposed revisions to the standards for open burning and open detonation of waste explosives (89 FR 19952, March 2024). <strong>That rule is proposed, not final.</strong> We describe it that way.</p>
  </Note>
);

export const WithStatus = () => (
  <Note>
    <p><strong>Verification status.</strong> Historic operating data indicates recovery of approximately 97% of recyclable material per burn cycle. <Chip status="pending">Independent verification in progress</Chip></p>
  </Note>
);
