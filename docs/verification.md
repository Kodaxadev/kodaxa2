# Kodaxa verification

Verified 2026-09-04.

## Original studio pass

- TypeScript: `npm run check` passes.
- Lint: `npm run lint` passes across the retained source.
- Dependencies: `npm audit` reports zero known vulnerabilities after compatible upgrades.
- Static build: completed successfully with Node 22.23.2. Node 24's Windows shutdown assertion is documented in `decisions.md`.
- Desktop browser: page renders, no horizontal overflow, no console errors observed after the dependency updates.
- Mobile browser: 390px-wide layout inspected; no horizontal overflow; hero, call to action, and navigation render. Mobile navigation opens, its contact link navigates to the contact section, and the menu closes.
- All three in-page images load from local WebP assets.
- With animations disabled, the Daybreak concept dialog opens visibly and closes correctly.
- Services accordion opens the brand description with animations disabled.
- Contact URLs use the exact email supplied by the user: Justin@Kodaxa.dev.

The showcase brands are fictional concepts and are labeled accordingly. Contact uses mailto and does not claim to send or store inquiries. This verification does not test delivery through a visitor's email application.

## Las Mañanitas addition

- Independent research checked 39 menu names/prices against the official website and verified the family origin, owner names and attributed quote. The user confirmed the single remaining Clovis location.
- TypeScript, lint and the complete static export pass. Both `/` and `/concepts/las-mananitas` are emitted.
- Desktop rendering inspected at 1280px; mobile at 390px and 320px. No document or hero-heading horizontal overflow in the inspected views. Mobile navigation opens and closes after following its menu link.
- Breakfast, lunch, drinks and sides switch to 14, 16, 5 and 4 items respectively. Drinks prices include $4.75 for orange juice.
- All six restaurant images load locally. Actual dining-room and exterior photos were independently compared against Clovis opening coverage.
- Pause control changes both decorative ribbon and seal animations to `none`; content remains visible.
- Kodaxa’s featured restaurant link opens the concept. Its return link restores the studio and work section. The built static version also completed the client navigation.
- Exported HTML contains the restaurant metadata, `noindex, nofollow`, current Clovis phone and sole-location language, with no R Street visitor address.
- The local static preview helper now resolves extensionless exported pages to their `.html` files, matching the export layout. [Cloudflare HTML routing](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/) documents the deployed static-asset convention.
- Source modules remain below 400 lines. No dependencies were changed in this pass.
- Production preview HTTP checks pass for the home page, direct restaurant URL, trailing-slash URL, HEAD request and image asset; unknown pages return 404 and POST returns 405. A fresh direct browser load renders the concept, and selecting Sides shows its four items.

Ordering, directions and telephone are real external destinations; no order, phone call, restaurant message or reservation was submitted during testing. Menu availability and service hours are not live-synchronized. Sources and those limits are recorded in `las-mananitas-research.md`.

## Sassano’s addition

- Live official-site research verified the address, phone, posted hours, merchandise, and historical milestones. Independent copy review corrected the Montana Silversmiths brand spelling. Conflicting reporting on generation counts was resolved by omitting the count.
- The initial coherent route returned HTTP 200 and was opened in the existing preview tab.
- TypeScript and lint pass. The static build exports the studio, Las Mañanitas, and Sassano’s routes.
- Independent source review identified a skip-link contrast issue and Escape focus loss; both were corrected. The skip link has an explicit dark foreground and Escape now focuses the mobile menu trigger.
- Three local WebP images total 279,290 bytes: generated representative campaign art, an actual archival photo, and the actual storefront. Credits and the illustrative-image distinction appear on the page.
- Authored files remain under 400 lines, and dependencies are unchanged. The existing restaurant content and route remain in the site.
- This pass used source and compilation checks. Browser interaction testing and visual QA were not performed; no responsive or interaction test pass is claimed.
- No calls, directions requests, owner inquiries, or orders were submitted. Hours and merchandise are a sourced snapshot, not a live inventory system. Detailed evidence, limitations, and an unsent pitch draft are in `sassanos-pitch-research.md`.
