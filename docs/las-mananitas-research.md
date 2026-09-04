# Las Mañanitas: research and concept decisions

Research checked September 4, 2026. This is an independent Kodaxa design concept, not a commissioned project. The user confirmed that Clovis is the only remaining location and that the business moved from its original Fresno location off Hazelwood. That clarification governs the visitor-facing location story.

## The restaurant and its family

Owners Anna Navarro and Allen Juarez are a married couple. Las Mañanitas began in 2017 off Hazelwood Boulevard in southeast Fresno. Anna made chilaquiles for Allen at home; that dish carried into the restaurant’s first menu. They initially held other jobs, and their children helped as the restaurant became the family’s focus. The Clovis restaurant opened in 2025 at the former Foster’s Freeze, 902 Clovis Avenue. Allen described Clovis as a long-held dream.

Primary owner-interview sources:

- [The Business Journal, June 2, 2025](https://thebusinessjournal.com/fresno-favorite-brings-signature-chilaquiles-to-former-clovis-fosters-freeze/): owners, home chilaquiles, children, 2017 beginning and Clovis move. The concept uses a single 12-word quotation from Allen, attributed and linked.
- [ABC30, May 13, 2021](https://abc30.com/post/las-mananitas-fresno-southeast-yelp/10622248/): early challenges, word of mouth, Anna’s sister setting up Yelp, owner relationships with regular customers.
- [Official about page](https://lasmananitasrestaurants.com/about-us/): family recipes, daily preparation and welcoming atmosphere. The family names and specific origin are supported by interviews rather than inferred from its generic copy.

No substantiated Mexican regional origin, multigenerational recipe age, immigration story, or named grandparent was found. The concept does not invent one. “Mom’s Special” is a real menu name; it does not establish who created it.

## Current home and customer actions

| Information | Evidence and implementation |
| --- | --- |
| Only location | User confirmation; Clovis is the only visitor destination in the concept. |
| Address | 902 Clovis Avenue, Clovis, CA 93612, on the [official Clovis page](https://lasmananitasrestaurants.com/locations/clovis-ca/). |
| Phone | (559) 618-1100, official Clovis page. Links use `tel:+15596181100`. |
| Published hours | Official page lists daily 7:00am–8:30pm. Other listings disagree about midday closure. Display attributed published hours with a call-to-confirm note; no inferred “open now” state. |
| Order | [Clovis DoorDash storefront](https://www.doordash.com/store/las-mananitas-clovis-40745961/98917995/), taken from the restaurant’s current official navigation. |
| Directions | [Google Maps destination](https://maps.app.goo.gl/LygqqxaF57YCiaV28), taken from the official Clovis page. |
| Official site | [lasmananitasrestaurants.com](https://lasmananitasrestaurants.com/). Same-name Texas restaurants and their menus are unrelated. |

The old R Street Fresno address persists in parts of the official site. [Fresno Bee, December 18, 2025](https://www.fresnobee.com/news/local/article313815574.html) reported its closure at the end of 2025. [Fresno Bee, March 24, 2026](https://www.fresnobee.com/living/food-drink/article315170981.html) reported its replacement. The concept avoids obsolete Fresno visiting and ordering links. Its origin story remains Hazelwood to Clovis, as the user requested.

## Menu audit

The [official full menu](https://lasmananitasrestaurants.com/menu/) was inspected live and transcribed into `lib/restaurant/menu.ts`. A second independent review checked all 39 names and prices.

| Category | Items | Published price range |
| --- | ---: | --- |
| Breakfast | 14 | $14–$21 |
| Lunch | 16 | $4–$19 |
| Drinks | 5 | $4.75–$6 |
| Sides | 4 | $4–$5 |

Signature breakfast choices include Chilaquiles Classic ($17), Chilaquiles Deluxe ($21), Mom’s Special ($16), and the El Diablito Omelette ($18). Classic offers red or green salsa, eggs and beans; Deluxe adds meat. Café de Olla, horchata, Jamaica and cucumber lime connect the experience to actual drinks, not an invented cocktail program.

The site’s menu and delivery platforms have differences in offerings, descriptions and prices. The interactive menu preserves the official website’s 39-item dataset and explains its date/source. Dinner links to the current ordering storefront instead of mixing delivery prices into the website menu. No unverified serving-time cutoff, dietary badge, ingredient guarantee or reservation feature is added.

Independent review corrected a plural poblano description to one pepper and changed unverified “house favorite” endorsements in the menu list to the editorial invitation “Worth a taste.”

## Visual roots and photography

[Fresno Bee’s Clovis opening report](https://www.fresnobee.com/news/local/article307812025.html) documents the family-centered decor, portraits of women, mother-and-child imagery, and heart motifs. The restaurant’s own sun branding and food photography provide further visual anchors. These support warmth, daylight, family and generosity; they do not support inventing a specific regional folk-art tradition.

An independent visual comparison confirmed that the official exterior and interior pictures depict Clovis: matching fascia, sign, window panels, pillars, wooden tables, chairs, floor and ceiling fixtures. Reference newspaper images were inspected for verification only, not copied into the concept.

All six photographs used are from the restaurant’s own website. They were exported from observed page assets, visually inspected, and converted to local WebP files. No food, owner portrait or location was generated. Original ownership/reuse licensing is not established as stock licensing; these are reference photographs used in the private independent concept. The concept footer discloses that relationship.

| Local file in `public/images/las-mananitas/` | Original source |
| --- | --- |
| chilaquiles.webp | [Signature breakfast photograph](https://lasmananitasrestaurants.com/wp-content/uploads/2025/07/Authentic-Chilaquiles-and-Brunch-in-Fresno-Clovis-By-Las-Mananitas-Restaurant8.webp) |
| ingredients.webp | [Ingredients and molcajete](https://lasmananitasrestaurants.com/wp-content/uploads/2025/07/Authentic-Chilaquiles-and-Brunch-in-Fresno-Clovis16-1024x683.webp) |
| deluxe.webp | [Chilaquiles Deluxe](https://lasmananitasrestaurants.com/wp-content/uploads/2025/08/Chilaquiles-Deluxe-1024x999.jpeg) |
| table.webp | [Ingredients on the restaurant table](https://lasmananitasrestaurants.com/wp-content/uploads/2025/07/Authentic-Chilaquiles-and-Brunch-in-Fresno-Clovis9.webp) |
| clovis.webp | [Clovis exterior](https://lasmananitasrestaurants.com/wp-content/uploads/2025/07/Las-Mananitas-Clovis.jpg) |
| dining-room.webp | [Clovis dining room](https://lasmananitasrestaurants.com/wp-content/uploads/2025/07/Interior-Las-Mananitas-Clovis.jpg) |

## Design and implementation decisions

- **Warm cream, chile red and marigold:** drawn from the sun brand, warm food/table imagery and family atmosphere. The restaurant has a distinct visual identity inside Kodaxa’s larger showcase.
- **Expressive serif plus handwritten accents:** an editorial reading experience with personal warmth. Generous type and the photographed meal carry the opening, rather than generic restaurant stock imagery.
- **Story before menu, with immediate menu/order navigation:** gives the family’s history space without forcing hungry visitors through it.
- **Native category buttons and text menu:** readable HTML menu names/prices replace the need to zoom a menu image. Pressed states and standard keyboard activation expose the selected category. [WAI button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).
- **Local optimized images, static page:** existing project supports export; no reservation/inbox/payment backend is needed for links to the restaurant’s actual services. [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).
- **Decorative motion with controls:** a moving ribbon, gentle seal motion and section entrances support the mood. Native scrolling remains intact. A visible pause button and system reduced-motion preference disable decorative animation. [MDN reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).
- **Concept disclosure and no indexing:** prominently identifies Kodaxa’s independent work; no assertion of an official redesign or client relationship. [Next.js metadata robots](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots).

The historical Yelp brunch recognition was researched but omitted: official-site and later reporting give inconsistent years. [Yelp’s primary 2021 list](https://blog.yelp.com/community/yelp-reveals-top-100-brunch-spots-in-the-united-states-2/) and contemporaneous reporting support a 2021 Fresno recognition, not a current Clovis ranking. The family story is more useful here than an ambiguous award badge.
