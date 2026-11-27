# Diamond King Universe — Visual Design System

**Project:** Diamond Raja & Diamond King — Human–AI Project Journal  
**Project code:** DR-TRTT-OPS-001  
**Experience status:** Static interactive concept prototype; not a deployed SaaS product.

## Design direction

A premium, visual-first knowledge universe. The experience should feel like an editorial exploration interface combined with a calm, usable workspace — not a conventional text-heavy blog, game dashboard, or a claim of a functioning franchise network.

## Brand tokens

| Token | Value | Intended use |
|---|---|---|
| Royal Midnight | `#11152D` | Navigation, deep sections, primary text |
| Pink | `#E98BAF` | Learning accents, highlights |
| Piyaji | `#B77991` | Secondary accents, headings |
| Kathali | `#D6A542` | Focus, premium detail, key markers |
| White | `#FFFFFF` | Cards and clear content surfaces |
| Cyan accent | `#67E8F9` | Technical/connection accent |

## Typography

- Display: Manrope, with system fallback.
- Body: DM Sans, with system fallback.
- Keep headings short and expressive; body copy readable and restrained.
- Google Fonts are optional enhancement; system fallbacks keep the page readable if unavailable.

## Information architecture

1. **Home / Hero:** project identity, value proposition, entry point.
2. **Three Universes:** Learning, Idea, and SaaS worlds.
3. **Interactive Concept Map:** selectable nodes reveal connections and design principles.
4. **Product Blueprint:** staged product evolution and nine delivery workstreams.
5. **Human–AI Promise:** ownership, attribution, privacy, and project link.

## Interaction model

- Main navigation uses in-page anchors.
- Universe cards guide visitors to the relevant concept section.
- Concept-map nodes update the adjacent detail panel without a page reload.
- Mobile navigation opens and closes with an accessible state attribute.
- Reduced-motion preferences are respected.

## Accessibility and responsive behaviour

- Semantic landmarks, headings, links, and buttons.
- Descriptive accessible names for the concept map and menu.
- Keyboard-operable native buttons.
- Visible focus should remain browser-native; do not remove outlines.
- Responsive layouts for desktop, tablet, and mobile.
- Reduced-motion support.

## Content and trust boundaries

- Clearly identify the experience as a concept.
- Do not imply live accounts, real-time synchronization, active billing, customers, or franchise operations.
- Do not imply automatic access to private ChatGPT conversations.
- Keep private-by-default, selective sharing, human ownership, and evidence provenance as product requirements.
- No third-party analytics, tracking scripts, payment widgets, or credential collection are included.

## Local preview

Open `index.html` in a browser. The concept map and mobile menu work client-side without a backend. Google Fonts require network access; system fallbacks are included.

## Next validation gates

1. Owner review of brand direction and information architecture.
2. Usability test with representative users.
3. Accessibility audit with keyboard and screen-reader testing.
4. Product and technical specification before any real user data is introduced.
5. Threat model and privacy review before authentication or cloud storage.
