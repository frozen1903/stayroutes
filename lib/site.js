// Site genelinde kullanılan marka ve iletişim bilgileri tek yerde tutulur.

export const site = {
  name: 'StayRoute',
  description:
    'Premium travel concierge in Turkey: VIP airport transfers, curated tours and eSIM packages.',

  // TODO: Gerçek WhatsApp numarası eklenecek (ülke koduyla, boşluksuz, örn. 905xxxxxxxxx).
  whatsappNumber: '905555555555',

  // Boş bırakılan linkler sitede gösterilmez.
  social: {
    instagram: '',
  },
}

export function whatsappUrl(message) {
  const base = `https://wa.me/${site.whatsappNumber}`

  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
