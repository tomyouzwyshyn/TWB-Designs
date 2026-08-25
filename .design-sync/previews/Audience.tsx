import * as React from 'react';
import { Audience, Grid } from '@twb/design-system';

export const Single = () => (
  <Audience tag="Law enforcement" title="Evidence custodians · armourers · range officers · EOD">
    <p>Seized ammunition. Surrendered rounds from buy-backs and take-back days. Duty ammunition past service life. Seized narcotics and other property ordered destroyed.</p>
    <p>Vault clears the locker inside your own compound, on a schedule you set, with no contractor entering the chain.</p>
  </Audience>
);

export const SegmentPair = () => (
  <Grid cols={2}>
    <Audience tag="Law enforcement" title="Evidence custodians · armourers · EOD">
      <p>None of it can be sold, none of it can be discarded, and every item is signed for by somebody.</p>
    </Audience>
    <Audience tag="Commercial &amp; industrial" title="Manufacturers · distributors · ranges">
      <p>Off-specification production. Returned and expired stock. Recovered metal offsets a meaningful share of disposal cost.</p>
    </Audience>
  </Grid>
);
