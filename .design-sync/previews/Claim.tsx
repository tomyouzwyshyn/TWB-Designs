import * as React from 'react';
import { Claim, Claims } from '@twb/design-system';

export const Single = () => (
  <Claims>
    <Claim n="01" title="Same day. On site. Your own people.">
      One truck brings it on a Class V hitch. Two of your operators run it. No mobilisation project, no site build, no cleared contractor inside your wire.
    </Claim>
  </Claims>
);

export const TheFourClaims = () => (
  <Claims>
    <Claim n="01" title="Same day. On site. Your own people.">
      One truck brings it on a Class V hitch. Two of your operators run it. The nearest comparable closed chamber states a three-week deployment on its own datasheet.
    </Claim>
    <Claim n="02" title="Zero transfers. Zero diversion windows.">
      Signed out once, destroyed, weighed, certified. The chain of custody does not have a gap in it because there is no gap to have.
    </Claim>
    <Claim n="03" title="Recovered, not released.">
      Combustion separates the round into graded lead, antimony, brass and copper on your pad. Nothing usable leaves as a component.
    </Claim>
    <Claim n="04" title="Nobody stands over it.">
      Remote start, remote stop, armoured chamber, over-pressure relief, interlocked controls. The operator is never adjacent to live ordnance during a cycle.
    </Claim>
  </Claims>
);
