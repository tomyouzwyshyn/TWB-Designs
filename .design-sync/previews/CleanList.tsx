import * as React from 'react';
import { CleanList } from '@twb/design-system';

export const Commitments = () => (
  <CleanList items={[
    <><strong>No transfer.</strong> The material does not leave your controlled area between the moment it is signed out and the moment it ceases to exist.</>,
    <><strong>Your operators.</strong> We train your people. TWB personnel are not required for routine operation.</>,
    <><strong>No resale, no diversion.</strong> Recovered metal is graded and weighed on site under your observation.</>,
    <><strong>Certificate of destruction.</strong> Issued per cycle against your own inventory identifiers.</>,
  ]} />
);

export const References = () => (
  <CleanList items={[
    'Royal Canadian Mounted Police — co-development partner, six units',
    'Sûreté du Québec',
    'Calgary Police Service',
    'Winnipeg Police Service',
  ]} />
);
