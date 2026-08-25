import * as React from 'react';
import { Button, CtaBand } from '@twb/design-system';

export const Default = () => (
  <CtaBand
    title="If we are the wrong answer, we will say so on the first call."
    actions={<>
      <Button variant="solid" href="contact.html">Make an enquiry</Button>
      <Button href="contact.html">Request the capability statement</Button>
    </>}
  >
    Bring us the requirement as it actually is — calibre mix, volumes, custody constraints. You will get a straight fit assessment, not a pitch.
  </CtaBand>
);
