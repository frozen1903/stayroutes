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
