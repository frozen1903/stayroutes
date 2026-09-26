const tour = {
  slug: 'pamukkale-tour',
  category: 'beyond',
  card: {
    name: 'Pamukkale Tour',
    description: 'Discover thermal waters and white travertines.',
    image: 'https://images.unsplash.com/photo-1728466698701-2eb2af4117d4?q=80&w=2070&auto=format&fit=crop',
  },

  eyebrow: 'Ancient Turkey',
  title: 'Pamukkale Tour',
  seoTitle: 'Pamukkale & Hierapolis Tour: White Travertines',
  heroImage: 'https://images.unsplash.com/photo-1728466698701-2eb2af4117d4?q=80&w=2070&auto=format&fit=crop',
  intro: 'Discover white travertine terraces, thermal waters and the ancient city of Hierapolis in one unforgettable Turkey experience.',

  aboutTitle: 'White Terraces And Ancient Thermal Culture',
  aboutText: 'Pamukkale combines natural beauty with deep history: bright calcium terraces, warm mineral waters and the Roman city of Hierapolis above the valley.',
  secondaryText: 'This route keeps the day comfortable and photogenic, with guided context, relaxed exploration time and optional premium transfer support.',
  inclusions: [
    'Pamukkale travertines visit',
    'Hierapolis ancient city route',
    'Professional local guide',
    'Thermal pool recommendations',
    'Photo and free time support',
  ],
  stats: [
    ['Duration', 'Full Day'],
    ['Pickup', 'Optional VIP'],
    ['Guide', 'Included'],
    ['Experience', 'Natural'],
  ],
  // Extra (not in base schema): wide image under the stat boxes
  aboutImage: {
    src: 'https://images.unsplash.com/photo-1579366764547-bf1fe7284cf0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wide view of Pamukkale travertines and lake',
  },

  highlightsTitle: 'Pamukkale Experiences',
  // Extra (not in base schema): side paragraph next to the highlights heading
  highlightsText: 'A calm, scenic day shaped around nature, ancient history and the best viewpoints of the travertine terraces.',
  highlights: [
    {
      icon: '🏔️',
      title: 'White Travertines',
      description: "Walk along Pamukkale's famous calcium terraces and enjoy one of Turkey's most iconic natural views.",
    },
    {
      icon: '🏛️',
      title: 'Hierapolis Ruins',
      description: 'Explore the ancient theatre, historic streets and Roman heritage above the thermal terraces.',
    },
    {
      icon: '♨️',
      title: 'Thermal Waters',
      description: 'Relax near warm mineral waters and learn why this destination has been loved since antiquity.',
    },
    {
      icon: '📸',
      title: 'Golden Photo Stops',
      description: 'Capture bright white landscapes, turquoise pools and wide valley views throughout the day.',
    },
  ],

  timelineTitle: 'Your Journey',
  timeline: [
    {
      time: 'Early Morning',
      title: 'Hotel Pickup And Flight',
      description: 'Start with a comfortable pickup and the short domestic flight from Istanbul to Denizli, followed by a guided transfer toward Pamukkale.',
    },
    {
      time: 'Late Morning',
      title: 'Hierapolis Ancient City',
      description: 'Walk the ancient streets, the necropolis and the grand Roman theatre, with time for the Hierapolis Archaeology Museum.',
    },
    {
      time: 'Midday',
      title: 'Travertines And Viewpoints',
      description: 'Take off your shoes and walk the white terraces barefoot along the permitted path, pausing at the turquoise pools and panoramic viewpoints.',
    },
    {
      time: 'Afternoon',
      title: 'Thermal Break And Free Time',
      description: 'Enjoy an optional swim in the Antique Pool, lunch recommendations and relaxed photo time.',
    },
    {
      time: 'Sunset',
      title: 'Golden Hour On The Terraces',
      description: 'Stay for the soft evening light over the travertines, or add an optional paragliding flight, before your return transfer or overnight stay.',
    },
  ],

  // Extra (not in base schema): packages section h2
  packagesTitle: 'Choose Your Tour',
  packages: [
    {
      name: 'Standard',
      items: [
        'Guided Pamukkale route',
        'Hierapolis visit',
        'Group transfer option',
        'Free exploration time',
      ],
    },
    {
      name: 'Comfort Day',
      badge: 'Most Popular',
      featured: true,
      items: [
        'VIP transfer option',
        'Flexible schedule',
        'Thermal pool planning',
        'Premium photo stops',
        'Lunch recommendation',
      ],
    },
    {
      name: 'Private Pamukkale',
      items: [
        'Private guide',
        'Private vehicle option',
        'Custom pace',
        'Ancient city focus',
        'Concierge support',
      ],
    },
  ],

  detailsEyebrow: 'Detailed Experiences',
  detailsTitle: 'Discover Every Corner',
  details: [
    {
      eyebrow: 'UNESCO Natural Wonder',
      title: 'White Travertine Terraces 🏔️',
      text: 'Pamukkale’s terraces formed over thousands of years as warm, calcium-rich spring water cooled and left layers of white travertine behind. To protect this fragile surface, shoes come off at the edge and visitors walk barefoot along the permitted path. The shallow pools are made for wading rather than swimming, and the rock can feel warm, slippery or slightly rough underfoot.',
      bullets: ['Barefoot Walk On The Permitted Path', 'Shallow Turquoise Pools', 'Panoramic Valley Viewpoints', 'Guided Tips For A Safe Walk'],
      image: 'https://images.unsplash.com/photo-1595846415458-404defd93fb6?q=80&w=2070&auto=format&fit=crop',
      alt: 'White travertine terraces with turquoise pools in Pamukkale',
    },
    {
      eyebrow: 'Ancient City',
      title: 'Hierapolis & Its Roman Theatre 🏛️',
      text: 'Right above the terraces lies Hierapolis, an ancient spa city that flourished under Roman rule and shares UNESCO World Heritage status with Pamukkale. Its theatre is one of the best preserved in Türkiye, with a richly carved stage building, while the necropolis ranks among the largest in Anatolia. The Hierapolis Archaeology Museum, set inside the former Roman baths, displays statues, sarcophagi and finds from the site.',
      bullets: ['Roman Theatre With Carved Stage', 'Vast Ancient Necropolis', 'Archaeology Museum In The Roman Baths', 'Colonnaded Street And City Gates'],
      image: 'https://images.unsplash.com/photo-1726896512563-0b611b2e3f11?q=80&w=2070&auto=format&fit=crop',
      alt: 'Carved marble columns of the Roman theatre stage in Hierapolis',
    },
    {
      eyebrow: 'Golden Hour',
      title: 'Antique Pool, Sunset & Paragliding 🌅',
      text: 'The Antique Pool, often called Cleopatra’s Pool, lets you swim in warm spring water among fallen marble columns; it has its own separate ticket, bought on site. Late afternoon brings softer light and fewer crowds, which makes sunset the favourite time for photos on the terraces. For a different perspective, tandem paragliding flights over the travertines can be added with licensed local pilots, weather permitting.',
      bullets: ['Optional Swim Among Ancient Columns', 'Separate Antique Pool Ticket', 'Sunset Light On The Terraces', 'Optional Tandem Paragliding'],
      image: 'https://images.unsplash.com/photo-1636999873522-b9a080d75c20?q=80&w=2070&auto=format&fit=crop',
      alt: 'Paraglider silhouetted against the sunset sky over Pamukkale',
    },
  ],

  // Extra (not in base schema): gallery section h2
  galleryTitle: 'Pamukkale Moments',
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1720974613069-690834d3d08d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Turquoise pools on the Pamukkale travertines',
    },
    {
      src: 'https://images.unsplash.com/photo-1695591341351-4041f998bb5c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Ancient theatre of Hierapolis',
    },
    {
      src: 'https://images.unsplash.com/photo-1611867727438-66453ef52057?q=80&w=2070&auto=format&fit=crop',
      alt: 'Thermal pool below the white Pamukkale cliffs',
    },
  ],

  faq: [
    {
      question: 'How do we get to Pamukkale from Istanbul?',
      answer: 'The quickest way is a domestic flight of a little over an hour from Istanbul to Denizli Çardak Airport, followed by a drive of roughly an hour to Pamukkale. Depending on your package, we can arrange flights and transfers, and many guests add an overnight stay to enjoy sunset without rushing.',
    },
    {
      question: 'Do I really have to walk barefoot?',
      answer: 'Yes. Shoes are not allowed on the travertine terraces to protect the fragile surface, so you walk barefoot along the permitted path. Bring a small bag for your shoes, sunglasses and sunscreen, as the white rock reflects strong sunlight, and take care where the surface is wet.',
    },
    {
      question: 'Can we swim at Pamukkale?',
      answer: 'The terrace pools are shallow and meant for wading. Swimming is possible in the Antique Pool (Cleopatra’s Pool) at the top, which has its own separate ticket, so bring swimwear and a towel if you would like to go in.',
    },
    {
      question: 'When is the best time to visit?',
      answer: 'Spring and autumn are the most comfortable seasons, while summer middays can be very hot and bright on the white terraces. Late afternoon towards sunset usually brings softer light and fewer crowds.',
    },
    {
      question: 'Is it suitable for children and older travellers?',
      answer: 'Yes, the pace can be adjusted. Hierapolis involves walking on uneven ancient paths and the barefoot terrace walk can be tiring on sensitive feet, so we plan rest stops and shorter routes where needed.',
    },
  ],

  cta: {
    eyebrow: 'Plan Your Escape',
    title: 'Ready To Walk The White Terraces?',
    text: 'Contact our concierge team and let us plan your perfect Pamukkale day, from flights and transfers to the golden hour on the terraces.',
  },

  video: {
    youtubeId: 'pALUmt_mEFA',
    title: 'PAMUKKALE | Go Türkiye',
    credit: 'Go Türkiye on YouTube',
    heading: 'The White Terraces Of Pamukkale',
  },
}

export default tour
