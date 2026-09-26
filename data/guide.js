// Istanbul seyahat rehberi içeriği (/guide).
// Bilgiler Eylül 2026'da doğrulandı. Kur/fiyat gibi hızlı değişen rakamlar bilerek yazılmadı.
// Güncellerken `updated` tarihini de değiştir.

export const guide = {
  updated: 'September 2026',

  sections: [
    {
      id: 'airport',
      icon: '✈️',
      eyebrow: 'Arrival',
      title: 'From The Airport To The City',
      intro:
        'Istanbul has two international airports. Istanbul Airport (IST) is on the European side, about 45–75 minutes from Sultanahmet and Taksim by car. Sabiha Gökçen (SAW) is on the Asian side, usually 60–90 minutes from the old city depending on traffic.',
      items: [
        {
          title: 'Private transfer (IST & SAW)',
          text: 'The most comfortable option after a long flight: your driver meets you at arrivals with a name sign, handles the luggage and takes you door to door. Flight tracking means no extra stress if you land late.',
        },
        {
          title: 'Metro from IST (M11)',
          text: 'The M11 line runs from Istanbul Airport to Gayrettepe in about 30 minutes, where you change to the M2 line for Taksim. Great value if you travel light, but expect transfers with suitcases.',
        },
        {
          title: 'Havaist bus from IST',
          text: 'Airport shuttle buses run on many routes, including Taksim and Sultanahmet, with a luggage hold and no changes. Journey time depends heavily on traffic.',
        },
        {
          title: 'Metro & Havabus from SAW',
          text: 'The M4 metro connects Sabiha Gökçen with Kadıköy, from where ferries cross to the European side. Havabus shuttles run to Kadıköy and Taksim.',
        },
      ],
      cta: { label: 'Book A VIP Airport Transfer', href: '/transfer' },
    },

    {
      id: 'getting-around',
      icon: '🚋',
      eyebrow: 'Transport',
      title: 'Getting Around Istanbul',
      intro:
        'Public transport is fast, cheap and covers most sights. Traffic can be heavy, so trams, metro and ferries are often quicker than a car during the day.',
      items: [
        {
          title: 'Istanbulkart',
          text: 'The rechargeable transport card for metro, tram, bus, Marmaray and ferries. Buy it at the yellow Biletmatik machines at airports and stations. One card can be shared by up to 5 people: tap once per person at the gate. The card fee is not refundable.',
        },
        {
          title: 'T1 tram',
          text: 'The most useful line for visitors: it runs through Sultanahmet, the Grand Bazaar area, Eminönü and Karaköy to Kabataş.',
        },
        {
          title: 'Ferries',
          text: 'Public ferries cross between Europe and Asia all day and are the cheapest way to see the Bosphorus. Istanbulkart works on board.',
        },
        {
          title: 'Taxis',
          text: 'Use an app such as BiTaksi or Uber (in Istanbul, Uber mostly books licensed yellow taxis and the meter still runs). If you hail a taxi, insist on the meter, pay with small notes and say the amount out loud when handing over money.',
        },
      ],
    },

    {
      id: 'money',
      icon: '💳',
      eyebrow: 'Money',
      title: 'Money, Cards & Tipping',
      intro:
        'The currency is the Turkish lira (TRY, ₺). Cards are accepted almost everywhere, but carry some cash for small shops, bazaars, street food and tips.',
      items: [
        {
          title: 'ATMs',
          text: "Use ATMs belonging to banks, ideally next to a branch. When the ATM or card terminal offers to charge you in your home currency, choose lira instead — the machine's conversion rate is usually worse.",
        },
        {
          title: 'Exchanging money',
          text: 'Exchange offices (döviz) in the city usually give better rates than the airport or hotels. Compare the buy and sell rates before you change.',
        },
        {
          title: 'Tipping',
          text: 'Tipping is appreciated but optional. Leave 5–10% in restaurants (10–15% in upscale places), preferably in cash, and round up taxi fares. Since 2026, restaurants may no longer add compulsory cover or service charges, so check your bill.',
        },
        {
          title: 'Bargaining',
          text: 'Haggling is expected at the Grand Bazaar and in souvenir shops, but not in restaurants, supermarkets or shops with fixed price tags. Keep it friendly and walk away politely if the price is not right.',
        },
      ],
    },

    {
      id: 'connectivity',
      icon: '📶',
      eyebrow: 'Connectivity',
      title: 'Staying Connected',
      intro:
        'Having mobile data from the moment you land makes maps, taxi apps and translations effortless.',
      items: [
        {
          title: 'Travel eSIM',
          text: 'Install an eSIM before you fly and it activates when you land — no queue at a phone shop. Most recent iPhones and Android phones support eSIM.',
        },
        {
          title: 'Phone registration (IMEI)',
          text: 'Foreign phones can be used with roaming or a travel eSIM without any registration. A Turkish physical SIM in a foreign phone only works for 120 days unless the phone is registered, which involves a high fee — not worth it for a holiday.',
        },
        {
          title: 'Wi-Fi',
          text: 'Free Wi-Fi is common in hotels, cafés and at the airports, but it can be slow or require a Turkish phone number to log in.',
        },
      ],
      cta: { label: 'See eSIM Packages', href: '/esim' },
    },

    {
      id: 'safety',
      icon: '🆘',
      eyebrow: 'Safety',
      title: 'Emergency & Safety',
      intro:
        'Istanbul is generally safe for visitors. Use the same common sense you would in any big city, especially in crowded areas.',
      items: [
        {
          title: '112 — the only number you need',
          text: 'Call 112 for ambulance, police and fire. It is free, works from any phone — even without a SIM card — and operators can connect you to English speakers. Say "English, please".',
        },
        {
          title: 'Pharmacies',
          text: 'Pharmacies (Eczane) are marked with a red "E" sign. At night and on Sundays, a duty pharmacy (Nöbetçi Eczane) stays open; the nearest one is listed on every pharmacy door.',
        },
        {
          title: 'Common scams',
          text: 'Be wary of a shoe shiner who "accidentally" drops his brush, overly friendly strangers inviting you to a bar, and taxis without a running meter. A polite "no, thank you" is enough.',
        },
        {
          title: 'Documents',
          text: "Keep a photo of your passport on your phone and note your embassy's contact details before you travel.",
        },
      ],
    },

    {
      id: 'culture',
      icon: '🕌',
      eyebrow: 'Culture',
      title: 'Mosques & Local Etiquette',
      intro:
        'Many of Istanbul’s most beautiful sights are active mosques. Visitors are welcome — a few simple rules make the visit smooth.',
      items: [
        {
          title: 'Dress code',
          text: 'Shoulders and knees covered for everyone; women also cover their hair with a scarf. Shoes come off at the entrance. The Blue Mosque lends or sells covers at the door, Hagia Sophia does not — bring your own scarf.',
        },
        {
          title: 'Prayer times',
          text: 'Mosques close to tourists for about 30–45 minutes during each of the five daily prayers, and on Friday around midday. Plan visits for the morning or mid-afternoon.',
        },
        {
          title: 'Hagia Sophia & Blue Mosque',
          text: 'The Blue Mosque is free to enter. At Hagia Sophia, foreign visitors follow a separate route to the upper galleries with an entrance fee (€25 in 2026).',
        },
        {
          title: 'Grand Bazaar',
          text: 'The Grand Bazaar is closed on Sundays and on religious holidays. Go early on a weekday to avoid the biggest crowds.',
        },
      ],
      cta: { label: 'Explore The Old City Tour', href: '/tours/old-city-tour' },
    },

    {
      id: 'practical',
      icon: '🧳',
      eyebrow: 'Practical',
      title: 'Good To Know',
      intro: 'Quick answers to the questions travelers ask most before a trip to Istanbul.',
      items: [
        {
          title: 'Time zone',
          text: 'Turkey uses UTC+3 all year round and does not change clocks for summer time.',
        },
        {
          title: 'Power sockets',
          text: '230 V with European two-pin plugs (types C and F). Bring an adapter if your devices use a different plug.',
        },
        {
          title: 'Drinking water',
          text: 'Tap water is treated, but most locals and visitors drink bottled water, which is cheap and sold everywhere.',
        },
        {
          title: 'Visa',
          text: 'Many nationalities can visit visa-free or with an e-Visa. Always check the official e-Visa website (evisa.gov.tr) for your passport before booking.',
        },
        {
          title: 'Best time to visit',
          text: 'April–May and September–October bring mild weather and fewer crowds. Summers are hot and busy; winters are cool and rainy but quieter.',
        },
      ],
    },
  ],

  faq: [
    {
      question: 'What is the best way to get from Istanbul Airport to Sultanahmet?',
      answer:
        'A private transfer is the easiest option with luggage: about 45–75 minutes door to door. On a budget, take the Havaist bus or the M11 metro and continue with the M2 and the T1 tram.',
    },
    {
      question: 'Can my family share one Istanbulkart?',
      answer:
        'Yes. One Istanbulkart can be used by up to 5 people — tap the card once for each person at the gate. Make sure it has enough credit for everyone.',
    },
    {
      question: 'Do I need cash in Istanbul?',
      answer:
        'Cards are widely accepted, but it is useful to carry some Turkish lira for small shops, bazaars, street food and tips.',
    },
    {
      question: 'What is the emergency number in Turkey?',
      answer:
        '112 is the single emergency number for ambulance, police and fire. It is free and works from any phone, even without a SIM card.',
    },
    {
      question: 'Is Uber available in Istanbul?',
      answer:
        'Yes, but in Istanbul Uber mostly connects you with licensed taxis and the meter still runs. BiTaksi is a popular local alternative.',
    },
    {
      question: 'Do I need to register my phone in Turkey?',
      answer:
        'Not if you use roaming or a travel eSIM. Registration is only required when a Turkish physical SIM is used in a foreign phone for more than 120 days.',
    },
  ],
}
