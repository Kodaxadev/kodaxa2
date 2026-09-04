# Kodaxa decisions

Recorded 2026-09-04. The brief gives creative control and asks for an expressive, premium website representing Kodaxa as the small-business solution in Clovis, CA. Contact email was explicitly supplied as Justin@Kodaxa.dev.

## Art direction

**Decision:** warm ivory, near-black, acid green, large Manrope typography, a custom chrome knot, asymmetrical concept cards, and fine editorial rules. This is an original composition rather than a reproduction of another studio's website.

**Reason:** visual ambition should demonstrate design and implementation while local, human copy keeps the proposition approachable. The sculpture ties together the two disciplines; contrast and white space let the services remain easy to find.

Primary-source references reviewed live:

- [Locomotive](https://locomotive.ca/en): editorial confidence and work-centered presentation.
- [Locomotive's Lightship case study](https://locomotive.ca/en/work/lightship-1): immersive interaction paired with progressive disclosure and clear information architecture.
- [Active Theory](https://v5.activetheory.net/): integrated design and development as craft.
- [Merci-Michel](https://www.merci-michel.com/about/): art direction, motion, and interactive development.

**Alternative considered:** a dark, WebGL-heavy opening. The lighter editorial direction better balances expressive design with a local-business audience. A single optimized image plus CSS transforms was chosen over a 3D engine because this page needs visual atmosphere rather than a navigable 3D scene.

## Motion and interaction

Decorative loops, modest pointer movement, hover transformations, and once-per-section entrance effects use native CSS and IntersectionObserver. There is no scroll interception. The header provides an explicit motion toggle. Reduced-motion preferences disable looping movement. Functional dialogs remain visible when motion is disabled.

- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [MDN IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [React useEffect](https://react.dev/reference/react/useEffect): effects clean up event listeners, observer, and copy-feedback timer.
- [W3C contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): small informational text colors were darkened following review.
- [Base UI Dialog](https://base-ui.com/react/components/dialog) and [Accordion](https://base-ui.com/react/components/accordion): installed primitives provide dialog focus management and accordion interaction.

## Delivery and contact

The required Sites scaffold supplies React/Vinext, the installed UI primitives, and hosting integration. The page has no database, upload, authentication, or server-form requirement, so a static export is sufficient. This avoids deploying an unnecessary application server.

- [Vinext official repository](https://github.com/cloudflare/vinext): supports the Next.js API surface and static export.
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports): static output configuration and unsupported server-dependent features.
- [MDN mailto links](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#linking_to_an_email_address): contact opens the visitor's configured email application.

A backend inquiry form was not added because direct email satisfies the initial contact workflow without inventing an inbox service, collecting personal data, or pretending delivery occurred.

## Dependency review

The generated dependency pins initially produced npm audit findings. Compatible patched versions were selected from live npm metadata, with React packages updated together and required build-tool peers matched. No forced or legacy peer resolution was used.

- [React Server Functions denial of service advisory](https://github.com/advisories/GHSA-wx67-qw84-cm4g)
- [Vite Windows file access advisory](https://github.com/advisories/GHSA-fx2h-pf6j-xcff)

Lockfiles and third-party dependencies are generated artifacts. Hand-authored modules remain below 400 lines. An unused oversized sidebar primitive was removed from the starter.

## Windows build runtime

The installed Node 24.14.0 and bundled 24.19.0 both aborted during CLI shutdown after successful prerendering. Node 22.23.2 completed the same source with exit code 0. The project pins Node 22.23.2 as a development dependency so the normal npm build command is reproducible without changing the user's system installation. This is build tooling only and is not deployed. [Node's Windows/libuv issue](https://github.com/nodejs/node/issues/56645) documents the relevant shutdown assertion.
