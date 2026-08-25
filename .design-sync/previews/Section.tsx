import * as React from 'react';
import { Eyebrow, Lede, Section, Wrap } from '@twb/design-system';

export const Plain = () => (
  <Section>
    <Wrap narrow>
      <Eyebrow>The problem</Eyebrow>
      <h2>Every transfer is a window.</h2>
      <Lede>The standard method for destroying ammunition in 2026 is to put it in a hole in the ground and set it on fire.</Lede>
    </Wrap>
  </Section>
);

export const NeutralBand = () => (
  <Section tone="band">
    <Wrap narrow>
      <Eyebrow>Four claims</Eyebrow>
      <h2>What TWB does that the others cannot.</h2>
    </Wrap>
  </Section>
);

export const ProofGround = () => (
  <Section tone="proof">
    <Wrap narrow>
      <Eyebrow>Recovery</Eyebrow>
      <h2>Every round comes back as metal.</h2>
      <p>The sage wash is reserved for evidence, material and proof.</p>
    </Wrap>
  </Section>
);
