# Visual Design System — Diamond King Master Franchise

**Version:** 1.0 concept  
**Status:** Design specification for design/index.html.  
**Maturity:** Design artifact only; not a deployed product.

## Product experience

The experience is a visual-first workspace with three distinct but connected universes:

1. **Learning Universe / Learning Studio** — lessons, learning paths, corrections, experiments, and progress.
2. **Idea Universe / Idea Atlas** — owner-originated ideas, relationship maps, hypotheses, experiments, and incubation.
3. **SaaS Universe** — project workspaces, decisions, evidence, timelines, dashboards, and a future partner/franchise layer.

A shared Command Center provides orientation without collapsing the three universes into one feed.

## Visual identity

Use the approved project palette:

| Token | Hex | Role |
|---|---|---|
| Pink | #E98BAF | Learning highlights, selected states |
| Piyaji | #B77991 | Secondary accent, links, labels |
| Kathali | #D6A542 | Primary action, achievement, key markers |
| Royal Midnight | #11152D | Navigation, hero, primary dark surface |
| White | #FFFFFF | Cards and content surfaces |
| Cyan accent | #67E8F9 | Technical/evidence accent |
| Diamond Gold | #FFD700 | Reserved highlight accent |

Neutral backgrounds and text use low-contrast greys only for supporting UI, not as replacement brand colours.

## Layout and navigation

- Desktop: fixed left navigation rail (248px), fluid content canvas, max-width 1600px.
- Tablet: compact rail and two-column panels.
- Mobile: compact brand header, collapsible navigation, single-column cards.
- Navigation: Command Center, Three Universes, Idea Atlas, Learning Studio, Journey Timeline, Prototype Gallery, Trust & Ownership, Project Status.
- Keep primary actions visible and labels explicit.
- Avoid deep nested menus and avoid presenting every future module at once.

## Core components

- **Hero:** Royal Midnight gradient, concise value proposition, two clear navigation actions.
- **Status chip:** persistent “Concept · Not Live SaaS” marker.
- **Metric cards:** sample data must be explicitly described as illustrative.
- **Universe cards:** three visually distinct entry points with one-sentence purpose.
- **Idea map:** labelled SVG diagram with text description; no decorative-only connections.
- **Timeline:** ordered steps with maturity language (proposed / in progress / verified).
- **Learning progress:** progress bars labelled as sample values until connected to real records.
- **Prototype tiles:** clearly identify module concepts, not available production features.
- **Trust panel:** human ownership, private-by-default sharing, and evidence provenance.

## Interaction model

The static prototype supports in-page navigation and a mobile navigation toggle. It does not persist data or connect to a backend. Future interaction requirements:

- Select a node to open its record, provenance, related ideas, and permissions.
- Filter maps by universe, project, owner, and verification state.
- Timeline filters by date, project, and milestone status.
- Search across only the workspaces the current user can access.
- Export selected records to Markdown and JSON.
- Require confirmation before sharing or publishing.
- Preserve keyboard operation, visible focus, semantic headings, descriptive labels, and reduced-motion preferences.

## Accessibility and responsive acceptance criteria

- Semantic landmarks, heading hierarchy, accessible names, and keyboard navigation.
- Text contrast should be checked against WCAG 2.2 AA before production.
- Layout works at 320px width without horizontal page scrolling.
- Controls have visible focus and meaningful accessible state.
- SVG map has a title and descriptive text alternative.
- Respect prefers-reduced-motion.
- No essential information conveyed by colour alone.

## Prototype verification

- Self-contained HTML, CSS, SVG, and small vanilla JavaScript; no external runtime dependencies.
- Mobile navigation toggle is keyboard-operable and exposes aria-expanded.
- Main sections are reachable by in-page links.
- Illustrative dashboard metrics and learning progress are explicitly labelled.
- No authentication, database, external API, analytics, tracking, or data persistence is included.
