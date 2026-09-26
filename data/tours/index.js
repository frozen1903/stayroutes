import bosphorusDinnerCruise from './bosphorus-dinner-cruise'
import luxuryYachtTour from './luxury-yacht-tour'
import oldCityTour from './old-city-tour'
import princesIslandsTour from './princes-islands-tour'
import cappadociaExperience from './cappadocia-experience'
import pamukkaleTour from './pamukkale-tour'
import ephesusAncientCity from './ephesus-ancient-city'
import troyAncientCity from './troy-ancient-city'
import gallipoliTour from './gallipoli-tour'
import sapancaMasukiye from './sapanca-masukiye'

// Yeni tur eklemek için: bu klasöre <slug>.js oluştur ve aşağıdaki listeye ekle.
// Listedeki sıra, /tours sayfasındaki sıradır.
export const tours = [
  bosphorusDinnerCruise,
  luxuryYachtTour,
  oldCityTour,
  princesIslandsTour,
  cappadociaExperience,
  pamukkaleTour,
  ephesusAncientCity,
  troyAncientCity,
  gallipoliTour,
  sapancaMasukiye,
]

export const categories = [
  { id: 'istanbul', title: 'Istanbul Experiences' },
  { id: 'beyond', title: 'Beyond Istanbul' },
]

export function getTour(slug) {
  return tours.find((tour) => tour.slug === slug)
}

export function toursInCategory(categoryId) {
  return tours.filter((tour) => tour.category === categoryId)
}

// Ana sayfadaki "Popular Tours" bölümünde gösterilen turlar (sırasıyla)
export const featuredSlugs = [
  'bosphorus-dinner-cruise',
  'old-city-tour',
  'cappadocia-experience',
  'luxury-yacht-tour',
  'pamukkale-tour',
  'ephesus-ancient-city',
]

export function featuredTours() {
  return featuredSlugs.map(getTour).filter(Boolean)
}

// Tur sayfasının altındaki "You may also like": önce aynı kategoriden, yetmezse diğerlerinden
export function relatedTours(slug, count = 3) {
  const current = getTour(slug)
  const others = tours.filter((tour) => tour.slug !== slug)
  const sameCategory = others.filter((tour) => tour.category === current?.category)
  const rest = others.filter((tour) => tour.category !== current?.category)
  return [...sameCategory, ...rest].slice(0, count)
}
