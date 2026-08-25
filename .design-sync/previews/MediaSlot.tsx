import * as React from 'react';
import { MediaSlot } from '@twb/design-system';

export const Placeholder = () => (
  <MediaSlot
    video="assets/video/cycle.mp4"
    aspect="16/9"
    code="FIELD 02"
    label="Destruction cycle"
    meta="Closed chamber · two-stage combustion"
    note="Suggested footage: chamber exterior while running, burner detail, control readouts, heat shimmer at the stack. Mechanical close-ups — the machine at work."
  />
);

export const Portrait = () => (
  <MediaSlot
    video="assets/video/hero.mp4"
    aspect="4/5"
    code="FIELD 01"
    label="Deployment — arrival &amp; set-up"
    meta="Hamilton, ON · [location]"
    note="Suggested footage: trailer under tow, arrival through a secure gate, pad set-up. Machinery and process — never combat."
  />
);
