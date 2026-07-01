import TourDetail from '../TourDetail'

const heroImage =
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop'

export default function TroyAncientCity() {
  return (
    <TourDetail
      title="Troy Ancient City"
      heroImage={heroImage}
      intro="Visit the legendary city of Troy, where archaeology and mythology meet across ancient walls, gates and layered ruins."
      aboutTitle="Myth, Archaeology And Ancient Walls"
      aboutText="Troy brings together one of the world's most famous stories with a real archaeological site shaped by many settlement layers."
      secondaryText="The experience is designed as a comfortable historical route, with guided context, scenic stops and optional museum planning."
      stats={[
        ['Duration', 'Full Day'],
        ['Pickup', 'Optional VIP'],
        ['Guide', 'Included'],
        ['Experience', 'Mythology'],
      ]}
      inclusions={[
        'Troy archaeological site route',
        'Professional local guide',
        'Replica wooden horse visit',
        'Museum planning support',
        'Photo and free time support',
      ]}
      highlights={[
        {
          title: 'Legendary Troy',
          description:
            'Explore the ancient layers of a city known through archaeology, mythology and Homeric stories.',
        },
        {
          title: 'Wooden Horse',
          description:
            'Visit the symbolic wooden horse area and connect the site with the famous Trojan War legend.',
        },
        {
          title: 'Ancient Walls',
          description:
            'See defensive walls, gates and ruins that reveal how the settlement changed across centuries.',
        },
        {
          title: 'Museum Option',
          description:
            'Add a museum stop for deeper context on excavations, artifacts and the region around Troy.',
        },
      ]}
      packages={[
        {
          name: 'Standard',
          items: [
            'Guided Troy route',
            'Archaeological site visit',
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
            'Museum planning',
            'Premium photo stops',
            'Lunch recommendation',
          ],
        },
        {
          name: 'Private Troy',
          items: [
            'Private guide',
            'Private vehicle option',
            'Custom pace',
            'Mythology focused route',
            'Concierge support',
          ],
        },
      ]}
      gallery={[
        {
          src: heroImage,
          alt: 'Troy ancient city landscape',
        },
        {
          src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop',
          alt: 'Ancient landscape',
        },
        {
          src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop',
          alt: 'Historical route',
        },
      ]}
    />
  )
}
