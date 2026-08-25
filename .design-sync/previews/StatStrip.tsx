import * as React from 'react';
import { Stat, StatStrip } from '@twb/design-system';

export const HeroStrip = () => (
  <StatStrip>
    <Stat value="2001" label="In service since" />
    <Stat value="Same day" label="Arrival to first burn" />
    <Stat value="Zero" label="Custody transfers" />
    <Stat value=".50 cal" label="Maximum calibre" />
  </StatStrip>
);
