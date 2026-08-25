import * as React from 'react';

/**
 * Corner brackets — the TWB motif. Renders the two `<i>` elements every
 * bracketed surface needs. 6×6px marks offset outside the box on two
 * adjacent sides per corner. Never style corners any other way.
 */
export function Brackets(): React.JSX.Element {
  return (
    <>
      <i className="t" />
      <i className="b" />
    </>
  );
}

export interface WrapProps {
  /** Constrain to the reading measure (920px) rather than full 1280px. */
  narrow?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Page gutter container. Every section's content sits inside a Wrap —
 * it carries the max-width and the viewport-scaled side padding.
 */
export function Wrap({ narrow, children, className = '' }: WrapProps): React.JSX.Element {
  return <div className={`wrap${narrow ? ' narrow' : ''}${className ? ' ' + className : ''}`}>{children}</div>;
}

export interface SectionProps {
  /**
   * Ground treatment. `plain` is white, `band` is the neutral surface band,
   * `proof` is the sage wash reserved for evidence and material claims.
   */
  tone?: 'plain' | 'band' | 'proof';
  /** Reduced vertical padding. */
  tight?: boolean;
  /** Draw a 1px hairline across the top edge. */
  topRule?: boolean;
  children?: React.ReactNode;
}

/**
 * A full-width page section. `tone="proof"` is the sage-wash ground —
 * use it only where the content is evidence, recovery or verification.
 */
export function Section({ tone = 'plain', tight, topRule, children }: SectionProps): React.JSX.Element {
  const cls = [
    'section',
    tone === 'band' ? 'band' : '',
    tone === 'proof' ? 'band proof' : '',
    tight ? 'tight' : '',
    topRule ? 'bd-t' : '',
  ].filter(Boolean).join(' ');
  return <section className={cls.replace('section', '').trim() || undefined}>{children}</section>;
}

export interface EyebrowProps {
  children?: React.ReactNode;
}

/**
 * Sage mono label above a heading. Carries a trailing hairline rule.
 * One per section, uppercase, never more than a few words.
 */
export function Eyebrow({ children }: EyebrowProps): React.JSX.Element {
  return <span className="eyebrow">{children}</span>;
}

export interface TagProps {
  /** Render in sage instead of the default muted ink. */
  sage?: boolean;
  children?: React.ReactNode;
}

/** Small mono label inside a card — segment names, status prefixes. */
export function Tag({ sage, children }: TagProps): React.JSX.Element {
  return <span className="tag" style={sage ? { color: 'var(--sage)' } : undefined}>{children}</span>;
}

export interface LedeProps {
  children?: React.ReactNode;
}

/** Opening paragraph under a heading — larger, softer ink, 56ch measure. */
export function Lede({ children }: LedeProps): React.JSX.Element {
  return <p className="lede">{children}</p>;
}

export interface FineProps {
  children?: React.ReactNode;
}

/** Fine print — disclosure lines, reference caveats, source notes. */
export function Fine({ children }: FineProps): React.JSX.Element {
  return <p className="fine">{children}</p>;
}

export interface PullProps {
  children?: React.ReactNode;
}

/** Pull quote with the sage left rule. The argument's turning point. */
export function Pull({ children }: PullProps): React.JSX.Element {
  return (
    <div className="pull">
      <p>{children}</p>
    </div>
  );
}

export interface CleanListProps {
  /** List items — each gets the short sage dash marker. */
  items: React.ReactNode[];
}

/** Unbulleted list with sage dash markers. */
export function CleanList({ items }: CleanListProps): React.JSX.Element {
  return (
    <ul className="clean">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
