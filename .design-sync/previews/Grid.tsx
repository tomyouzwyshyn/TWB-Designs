import * as React from 'react';
import { Card, Grid } from '@twb/design-system';

export const ThreeColumn = () => (
  <Grid cols={3}>
    <Card marked title="Lead &amp; antimony"><p>Battery-grade Pb–Sb feedstock.</p></Card>
    <Card marked title="Cartridge brass"><p>High-value non-ferrous scrap.</p></Card>
    <Card marked title="Copper jackets"><p>Separated in the same cycle.</p></Card>
  </Grid>
);

export const TwoColumn = () => (
  <Grid cols={2}>
    <Card title="Qualifying country status"><p>Canada is a qualifying country under DFARS 225.872.</p></Card>
    <Card title="Canadian Commercial Corporation"><p>The Government of Canada guarantees CCC’s contractual commitments.</p></Card>
  </Grid>
);
