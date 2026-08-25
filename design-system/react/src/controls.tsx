import * as React from 'react';
import { Brackets } from './primitives';

export interface ButtonProps {
  /** Link target. Buttons are anchors in this system — every one goes somewhere. */
  href?: string;
  /**
   * `solid` is the black primary action, `outline` the secondary.
   * One solid button per view; more than one and neither reads as the action.
   */
  variant?: 'solid' | 'outline';
  /** Compact size for headers and dense rows. */
  small?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * The TWB button. Zero radius, mono uppercase label, corner brackets that
 * scale 1.028 on hover while the fill goes sage. Always an anchor.
 */
export function Button({ href = '#', variant = 'outline', small, children, onClick }: ButtonProps): React.JSX.Element {
  const cls = ['btn', variant === 'solid' ? 'solid' : '', small ? 'small' : ''].filter(Boolean).join(' ');
  return (
    <a className={cls} href={href} onClick={onClick}>
      {children}
      <Brackets />
    </a>
  );
}

export interface ChipProps {
  /**
   * Disclosure state. `held` = we have it, `pending` = in progress,
   * `na` = not applicable / blocked on something named.
   */
  status?: 'held' | 'pending' | 'na';
  children?: React.ReactNode;
}

/**
 * Status chip — the disclosure primitive. Every pending claim on the site
 * carries one. Sage for held and pending, muted ink for not-applicable;
 * status is never carried by a traffic-light hue.
 */
export function Chip({ status = 'held', children }: ChipProps): React.JSX.Element {
  const map = { held: 'held', pending: 'pend', na: 'na' } as const;
  return <span className={`chip ${map[status]}`}>{children}</span>;
}

export interface CardProps {
  /**
   * `marked` puts the card on the sage wash with corner brackets —
   * reserved for cards that carry evidence, material or proof.
   */
  marked?: boolean;
  /** Mono label above the heading. */
  tag?: React.ReactNode;
  /** Card heading. */
  title?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Content card. Use `marked` for evidence and material; leave it plain for
 * everything else — a bracketed card that carries no proof dilutes the motif.
 */
export function Card({ marked, tag, title, children }: CardProps): React.JSX.Element {
  return (
    <div className={`card${marked ? ' marked' : ''}`}>
      {marked ? <Brackets /> : null}
      {tag ? <span className="tag">{tag}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  );
}

export interface GridProps {
  /** Column count at desktop. Collapses to one column under 760px. */
  cols?: 2 | 3 | 4;
  children?: React.ReactNode;
}

/** Responsive card grid. */
export function Grid({ cols = 3, children }: GridProps): React.JSX.Element {
  return <div className={`grid g${cols}`}>{children}</div>;
}

export interface NoteProps {
  /**
   * `signature` is the sage-bordered variant — use it for the disclosure
   * notes that carry the brand's honesty posture ("what we do not claim").
   */
  signature?: boolean;
  children?: React.ReactNode;
}

/**
 * Inset note block. The signature variant is where TWB states what it
 * does NOT claim — the most brand-defining component in the system.
 */
export function Note({ signature, children }: NoteProps): React.JSX.Element {
  return <div className={`note${signature ? ' sig' : ''}`}>{children}</div>;
}
