import TourDetail from '../TourDetail'

const heroImage =
  'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2070&auto=format&fit=crop'

export default function EphesusAncientCity() {
  return (
    <TourDetail
      title="Ephesus Ancient City"
      heroImage={heroImage}
      intro="Explore marble streets, Roman monuments and the legendary Celsus Library in one of Turkey's most impressive ancient cities."
      aboutTitle="A Walk Through The Ancient Aegean"
      aboutText="Ephesus is one of the best preserved classical cities in the region, with theatres, temples, public squares and marble streets shaped by Greek and Roman history."
      secondaryText="This route keeps the visit comfortable and rich in context, with guided storytelling, photo stops and optional premium transfer support."
      stats={[
        ['Duration', 'Full Day'],
        ['Pickup', 'Optional VIP'],
        ['Guide', 'Included'],
        ['Experience', 'Historical'],
      ]}
      inclusions={[
        'Ephesus ancient city route',
        'Professional local guide',
        'Temple of Artemis stop',
        'Terrace Houses planning',
        'Photo and free time support',
      ]}
      highlights={[
        {
          title: 'Celsus Library',
          description:
            "See the most iconic facade of Ephesus and learn the story behind one of antiquity's great libraries.",
        },
        {
          title: 'Great Theatre',
          description:
            'Walk into the massive ancient theatre where public life, music and history came together.',
        },
        {
          title: 'Marble Streets',
          description:
            'Follow the preserved streets, gates and monuments that make Ephesus feel alive today.',
        },
        {
          title: 'Artemis Heritage',
          description:
            'Add context with the Temple of Artemis area, once counted among the wonders of the ancient world.',
        },
      ]}
      packages={[
        {
          name: 'Standard',
          items: [
            'Guided Ephesus route',
            'Ancient city visit',
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
            'Temple of Artemis stop',
            'Premium photo points',
            'Lunch recommendation',
          ],
        },
        {
          name: 'Private Ephesus',
          items: [
            'Private guide',
            'Private vehicle option',
            'Custom pace',
            'Terrace Houses focus',
            'Concierge support',
          ],
        },
      ]}
      gallery={[
        {
          src: heroImage,
          alt: 'Ephesus ancient city',
        },
        {
          src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2070&auto=format&fit=crop',
          alt: 'Ancient ruins in Turkey',
        },
        {
          src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2070&auto=format&fit=crop',
          alt: 'Historical Turkey route',
        },
      ]}
    />
  )
}
