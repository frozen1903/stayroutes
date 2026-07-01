import TourDetail from '../TourDetail'

const heroImage =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop'

export default function GallipoliTour() {
  return (
    <TourDetail
      title="Gallipoli Tour"
      heroImage={heroImage}
      intro="Follow the Gallipoli peninsula with memorial sites, battlefield viewpoints and guided historical context throughout the day."
      aboutTitle="A Respectful Historical Peninsula Route"
      aboutText="Gallipoli is a powerful historical destination shaped by memorials, battlefield landscapes and the waters of the Dardanelles."
      secondaryText="This tour keeps the day thoughtful and comfortable, combining guided explanations, important stops and optional premium transfer support."
      stats={[
        ['Duration', 'Full Day'],
        ['Pickup', 'Optional VIP'],
        ['Guide', 'Included'],
        ['Experience', 'Historical'],
      ]}
      inclusions={[
        'Gallipoli battlefield route',
        'Professional local guide',
        'Memorial and cemetery visits',
        'Coastal viewpoint stops',
        'Photo and free time support',
      ]}
      highlights={[
        {
          title: 'Battlefield Route',
          description:
            'Visit key areas connected with the Gallipoli campaign and understand the landscape of the peninsula.',
        },
        {
          title: 'Memorial Sites',
          description:
            'See meaningful memorials and cemeteries with respectful historical context from your guide.',
        },
        {
          title: 'Coastal Views',
          description:
            'Follow scenic points along the Dardanelles and the Aegean side of the peninsula.',
        },
        {
          title: 'Guided Context',
          description:
            'Connect dates, routes and human stories into a clear and thoughtful full day experience.',
        },
      ]}
      packages={[
        {
          name: 'Standard',
          items: [
            'Guided Gallipoli route',
            'Memorial site visits',
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
            'Coastal photo stops',
            'Premium route planning',
            'Lunch recommendation',
          ],
        },
        {
          name: 'Private Gallipoli',
          items: [
            'Private guide',
            'Private vehicle option',
            'Custom pace',
            'Family history focus',
            'Concierge support',
          ],
        },
      ]}
      gallery={[
        {
          src: heroImage,
          alt: 'Gallipoli coastline',
        },
        {
          src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop',
          alt: 'Coastal memorial route',
        },
        {
          src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
          alt: 'Historical landscape',
        },
      ]}
    />
  )
}
