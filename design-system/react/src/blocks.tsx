import * as React from 'react';
import { Brackets } from './primitives';

export interface ClaimProps {
  /** Two-digit ordinal — claims are always numbered and always in fixed order. */
  n: string;
  /** The claim itself, stated as fact. */
  title: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * One numbered claim row. The four TWB claims always appear in their
 * locked order: same day / zero transfers / recovered not released /
 * nobody stands over it. Never reorder them.
 */
export function Claim({ n, title, children }: ClaimProps): React.JSX.Element {
  return (
    <div className="claim">
      <div className="n">{n}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export interface ClaimsProps {
  children?: React.ReactNode;
}

/** Container for Claim rows — carries the heavy top rule. */
export function Claims({ children }: ClaimsProps): React.JSX.Element {
  return <div className="claims">{children}</div>;
}

export interface StatProps {
  /** The figure. Sage, tabular numerals. */
  value: React.ReactNode;
  /** Mono uppercase label beneath. */
  label: React.ReactNode;
}

/** Single hero statistic. */
export function Stat({ value, label }: StatProps): React.JSX.Element {
  return (
    <div className="hstat">
      <span className="v">{value}</span>
      <span className="k">{label}</span>
    </div>
  );
}

export interface StatStripProps {
  /** Typically four stats — the row sits under the hero on a sage hairline. */
  children?: React.ReactNode;
}

/** Four-column statistic strip. */
export function StatStrip({ children }: StatStripProps): React.JSX.Element {
  return <div className="hero-strip">{children}</div>;
}

export interface SpecRow {
  /** Specification name. */
  k: React.ReactNode;
  /** Value — rendered in the mono UI register with tabular numerals. */
  v: React.ReactNode;
}

export interface SpecTableProps {
  /** Left column header. */
  headK?: React.ReactNode;
  /** Right column header. */
  headV?: React.ReactNode;
  rows: SpecRow[];
}

/**
 * Specification table. Values render in mono sage — this is the register
 * for anything measurable and checkable.
 */
export function SpecTable({ headK = 'Specification', headV = 'Value', rows }: SpecTableProps): React.JSX.Element {
  return (
    <div className="scroller">
      <table>
        <thead>
          <tr>
            <th>{headK}</th>
            <th>{headV}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="k">{r.k}</td>
              <td className="v">{r.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface MediaSlotProps {
  /** Path to the video file, e.g. `assets/video/hero.mp4`. */
  video?: string;
  /** CSS aspect-ratio for the frame, e.g. `16/9`, `21/9`, `4/5`. */
  aspect?: string;
  /** Mono code shown at the left of the caption bar, e.g. `FIELD 01`. */
  code?: React.ReactNode;
  /** Caption label. */
  label?: React.ReactNode;
  /** Right-hand caption detail — location, condition. */
  meta?: React.ReactNode;
  /** The intended shot list. Stays overlaid while interim footage plays. */
  note?: React.ReactNode;
}

/**
 * Video slot with a self-documenting placeholder. Until a file exists at
 * `video`, a bracketed frame shows the intended shot list. Footage rule:
 * machinery, material and procedure — never combat.
 */
export function MediaSlot({ video, aspect = '16/9', code = 'FIELD 01', label, meta, note }: MediaSlotProps): React.JSX.Element {
  return (
    <figure className="media" data-video={video}>
      <div className="media-frame" style={{ aspectRatio: aspect }}>
        <div className="media-ph">
          <span className="ph-cross" aria-hidden="true" />
          <span className="ph-tag">Footage slot{video ? ` — ${video}` : ''}</span>
          <span className="ph-note">{note}</span>
        </div>
      </div>
      <figcaption className="media-cap">
        <span>
          <b>{code}</b> &nbsp;{label}
        </span>
        <span>{meta}</span>
      </figcaption>
      <Brackets />
    </figure>
  );
}

export interface AudienceProps {
  /** Segment name — the mono label. */
  tag: React.ReactNode;
  /** The roles this segment covers. */
  title: React.ReactNode;
  children?: React.ReactNode;
}

/** Audience block — one buyer segment, on a heavy top rule. */
export function Audience({ tag, title, children }: AudienceProps): React.JSX.Element {
  return (
    <div className="audience">
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export interface StepsProps {
  /** Ordered steps — each numbered in sage mono. */
  items: React.ReactNode[];
}

/** Numbered process list — "what happens next" sequences. */
export function Steps({ items }: StepsProps): React.JSX.Element {
  return (
    <ol className="steps">
      {items.map((it, i) => (
        <li key={i}>
          <span className="n">{String(i + 1).padStart(2, '0')}</span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}
