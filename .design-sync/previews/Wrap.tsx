import * as React from 'react';
import { Wrap } from '@twb/design-system';

export const Default = () => (
  <Wrap>
    <h2>Full measure</h2>
    <p>The default wrap runs to 1280px with viewport-scaled gutters.</p>
  </Wrap>
);

export const Narrow = () => (
  <Wrap narrow>
    <h2>Reading measure</h2>
    <p>The narrow wrap constrains to 920px — used wherever the content is prose the reader has to follow closely.</p>
  </Wrap>
);
