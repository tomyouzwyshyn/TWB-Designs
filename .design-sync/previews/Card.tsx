import * as React from 'react';
import { Card, Chip, Grid } from '@twb/design-system';

export const Plain = () => (
  <Card tag="Intent — gated" title="Clear">
    <p>Field destruction of UXO and de-mining remnants. <strong>Gate:</strong> acquisition of controlled-detonation capability. Not a current capability.</p>
  </Card>
);

export const Marked = () => (
  <Card marked tag="Shipping today" title="Retire">
    <p>On-site destruction of expired, seized, surrendered and surplus small arms ammunition up to .50 calibre, without transfer.</p>
  </Card>
);

export const EvidenceRow = () => (
  <Grid cols={3}>
    <Card marked title="Lead &amp; antimony">
      <p>Cores recover as a Pb–Sb alloy ingot — battery-grade feedstock sought by secondary lead smelters.</p>
    </Card>
    <Card marked title="Cartridge brass">
      <p>Among the highest-value non-ferrous scrap grades, recovered clean and separated.</p>
    </Card>
    <Card marked title="Copper jackets">
      <p>Separated automatically within the same cycle. No downstream sorting required.</p>
    </Card>
  </Grid>
);

export const WithStatus = () => (
  <Card marked tag="Why this clause exists" title="The resale problem">
    <p>In January 2024 the Michigan State Police suspended a firearms-destruction contract after it emerged that the contractor was reselling salvaged parts from destroyed weapons.</p>
    <p><Chip status="pending">In preparation</Chip></p>
  </Card>
);
