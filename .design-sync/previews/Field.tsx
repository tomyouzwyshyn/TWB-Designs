import * as React from 'react';
import { Field } from '@twb/design-system';

export const Text = () => <Field label="Organisation" required placeholder="Test County Sheriff’s Office" />;

export const Select = () => (
  <Field label="Organisation type" required type="select"
    options={['Law enforcement', 'Defence — installation / base', 'Commercial & industrial', 'Allied / international government']} />
);

export const WithHint = () => (
  <Field label="Approximate volume" type="select"
    options={['Under 1,000 lb', '1,000 – 10,000 lb', '10,000 – 50,000 lb', 'Over 50,000 lb']}
    hint="Bands, deliberately — do not send exact counts through a web form." />
);

export const Invalid = () => (
  <Field label="Work email" required type="email" invalid error="A valid email is required" />
);

export const Textarea = () => (
  <Field label="The situation, in your words" required type="textarea"
    placeholder="What you hold, roughly how much, and the constraint you are working against." />
);
