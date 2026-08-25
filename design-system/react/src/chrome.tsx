import * as React from 'react';
import { LOGO_BLACK, LOGO_WHITE } from './logo';

export interface WordmarkProps {
  /** Logotype asset. Defaults to the inlined TWB mark — leave it unset. */
  src?: string;
  /** Render the white variant for dark grounds. */
  white?: boolean;
  /** Mono descriptor beneath or beside the mark. */
  descriptor?: React.ReactNode;
  /** `header` is the small inline lockup; `signature` is the large footer mark. */
  size?: 'header' | 'signature';
}

/**
 * The TWB lockup — logotype plus the word "Designs". In the footer the
 * signature size sits inside corner brackets over a sage descriptor.
 * Never re-typeset the mark; it is always the supplied asset.
 */
export function Wordmark({
  src,
  white,
  descriptor = 'Property destruction',
  size = 'header',
}: WordmarkProps): React.JSX.Element {
  const logo = src ?? (white ? LOGO_WHITE : LOGO_BLACK);
  if (size === 'signature') {
    return (
      <div className="foot-mark">
        <div className="lock">
          <b className="c c1" />
          <b className="c c2" />
          <b className="c c3" />
          <b className="c c4" />
          <div className="word-lock">
            <img className="word-img" src={logo} alt="TWB" />
            <span className="wd">Designs</span>
          </div>
          <div className="sub">{descriptor}</div>
        </div>
      </div>
    );
  }
  return (
    <a className="brand" href="index.html">
      <img className="mark" src={logo} alt="TWB" />
      <b className="wd">Designs</b>
      <span className="u">{descriptor}</span>
    </a>
  );
}

export interface CtaBandProps {
  /** Mono eyebrow, sage-hot on the dark ground. */
  eyebrow?: React.ReactNode;
  /** The heading — kept to about 24 characters per line. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons. On the dark ground the solid button inverts to white. */
  actions?: React.ReactNode;
}

/**
 * Full-bleed black call-to-action band. The one place the ground inverts
 * on a digital surface. Sits above the footer on every page.
 */
export function CtaBand({ eyebrow = 'Next step', title, children, actions }: CtaBandProps): React.JSX.Element {
  return (
    <section className="cta-band">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{children}</p>
        <div className="cta-actions">{actions}</div>
      </div>
    </section>
  );
}

export interface ClaimLineProps {
  /** The four claims, in their locked order. */
  claims?: string[];
}

/** Mono strip of the four claims, above the footer on every page. */
export function ClaimLine({
  claims = [
    'Same day · on site · your own people',
    'Zero transfers · zero diversion windows',
    'Recovered, not released',
    'Nobody stands over it',
  ],
}: ClaimLineProps): React.JSX.Element {
  return (
    <div className="claimline">
      <div className="wrap">
        {claims.map((c, i) => (
          <span key={i}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export interface PageHeadProps {
  /** Sage mono label. */
  eyebrow?: React.ReactNode;
  /** Page title. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/** Interior page header — twelve-column grid wash behind the title. */
export function PageHead({ eyebrow, title, children }: PageHeadProps): React.JSX.Element {
  return (
    <div className="page-head">
      <div className="wrap">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        {children ? <p className="lede">{children}</p> : null}
      </div>
    </div>
  );
}

export interface FieldProps {
  /** Field label — mono uppercase. */
  label?: React.ReactNode;
  /** Marks the label with a sage asterisk. */
  required?: boolean;
  /** Control type. `select` and `textarea` render their own elements. */
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  /** Options for `type="select"`. */
  options?: string[];
  /** Sub-label guidance shown under the control. */
  hint?: React.ReactNode;
  /** Render the invalid state — dashed border in the negative register. */
  invalid?: boolean;
  /** Message shown when invalid. */
  error?: React.ReactNode;
  placeholder?: string;
  defaultValue?: string;
}

/**
 * Form field. Invalid state is carried by weight and form — a dashed
 * border in dark neutral — never by a red hue.
 */
export function Field({
  label, required, type = 'text', options = [], hint, invalid, error = 'Required', placeholder, defaultValue,
}: FieldProps): React.JSX.Element {
  return (
    <div className={`field${invalid ? ' bad' : ''}`}>
      {label ? (
        <label>
          {label} {required ? <span className="req">*</span> : null}
        </label>
      ) : null}
      {type === 'select' ? (
        <select defaultValue={defaultValue}>
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea placeholder={placeholder} defaultValue={defaultValue} />
      ) : (
        <input type={type} placeholder={placeholder} defaultValue={defaultValue} />
      )}
      {hint ? <span className="hint">{hint}</span> : null}
      {invalid ? <span className="err">{error}</span> : null}
    </div>
  );
}

export interface CheckboxProps {
  /** Consent or option text. */
  children?: React.ReactNode;
  defaultChecked?: boolean;
}

/** Square checkbox — sage fill when checked, zero radius. */
export function Checkbox({ children, defaultChecked }: CheckboxProps): React.JSX.Element {
  // `label` sits in the mono UI register, so the consent text needs the same
  // inline reset the site's own markup carries or it renders uppercase mono.
  return (
    <label className="check" style={{ textTransform: 'none', letterSpacing: 0 }}>
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span>{children}</span>
    </label>
  );
}

export interface CustodyStripProps {
  /** Label for the conventional (negative-register) row. */
  negLabel?: React.ReactNode;
  /** Label for the Vault row. */
  posLabel?: React.ReactNode;
  /** Number of diversion windows shown on the conventional row. */
  windows?: number;
  /** Text inside the sage zero-window marker. */
  zeroText?: React.ReactNode;
}

/**
 * The custody comparison strip — conventional disposal's transfer windows
 * in dashed dark neutral against Vault's unbroken sage line. The negative
 * register is carried by dashed strokes and weight, never by colour.
 */
export function CustodyStrip({
  negLabel = 'Conventional', posLabel = 'With Vault', windows = 3,
  zeroText = 'Zero windows — inside your perimeter',
}: CustodyStripProps): React.JSX.Element {
  return (
    <div className="chainmini">
      <div className="row neg">
        <span className="lbl">{negLabel}</span>
        <span className="track">
          <span className="node" />
          {Array.from({ length: windows }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="seg" />
              <span className="win">Window {i + 1}</span>
            </React.Fragment>
          ))}
          <span className="seg" />
          <span className="node" />
        </span>
      </div>
      <div className="row">
        <span className="lbl">{posLabel}</span>
        <span className="track">
          <span className="node" />
          <span className="seg" />
          <span className="zero">{zeroText}</span>
          <span className="seg" />
          <span className="node" />
        </span>
      </div>
    </div>
  );
}
