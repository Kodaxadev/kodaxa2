export const projects = [
  {
    id: 'daybreak',
    name: 'Daybreak Coffee',
    category: 'Brand identity · Digital experience',
    image: '/images/cafe.webp',
    thumbnailImage: '/images/cafe-home.webp',
    thumbnailWidth: 900,
    thumbnailHeight: 1350,
    alt: 'Warm sunlight falling across a quiet café counter and stools',
    className: 'coffee',
    eyebrow: 'A DAILY RITUAL, REIMAGINED.',
    headline: 'Good mornings\nstart here.',
    description:
      'A neighborhood coffee concept with a little more soul. A warm identity, expressive typography, and a digital experience that makes the first visit feel familiar.',
    challenge:
      'How do you bring the feeling of a favorite neighborhood café online?',
    approach:
      'Start with the ritual: rich color, unhurried photography, and the things guests want to find first. Menus, the story, and a reason to stop by.',
    disciplines: ['Visual identity', 'Art direction', 'Website design'],
  },
  {
    id: 'forma',
    name: 'Forma Living',
    category: 'Art direction · Website concept',
    image: '/images/architecture.webp',
    thumbnailImage: '/images/architecture-home.webp',
    thumbnailWidth: 900,
    thumbnailHeight: 1350,
    alt: 'Mid-century California architecture framed by palms and a clear blue sky',
    className: 'architecture',
    eyebrow: 'SPACES FOR A DIFFERENT PACE.',
    headline: 'Room to\nlive well.',
    description:
      'An architectural living concept built around space, light, and considered details. A confident editorial system lets the places do the talking.',
    challenge:
      'How can a digital experience feel as carefully considered as the spaces it presents?',
    approach:
      'Give photography room to breathe. Pair a precise visual grid with warm typography, clear project details, and a direct path to an inquiry.',
    disciplines: ['Creative direction', 'Digital design', 'Interaction design'],
  },
] as const;
