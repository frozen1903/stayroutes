import { site } from '../lib/site'
import { tours } from '../data/tours'

export default function sitemap() {
  const pages = ['', '/transfer', '/tours', '/esim', '/guide', '/services']

  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'weekly',
      priority: path === '' ? 1 : 0.8,
    })),
    ...tours.map((tour) => ({
      url: `${site.url}/tours/${tour.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
