# StayRoute — Proje Notları

Türkiye'ye gelen turistler için bağımsız "dijital seyahat concierge" sitesi: VIP havalimanı transferi, turlar, eSIM.
Tüm rezervasyonlar WhatsApp üzerinden alınıyor (backend yok). İçerik İngilizce.

## Ürün kararları

- Marka adı **StayRoute**. Başka isim (StayGuest vb.) kullanılmaz; ad `lib/site.js` içindeki `site.name`'den okunur.
- Site **hiçbir otele bağlı değil**. Otel/Pell Palace linkleri kaldırıldı, "reception / room service" gibi otele özgü metinler kullanılmaz.
- Gerçek WhatsApp numarası **en son** eklenecek. Şimdilik `lib/site.js`'deki `whatsappNumber` placeholder (`905555555555`).
  Numarayı hiçbir dosyaya elle yazma, her zaman `whatsappUrl()` kullan.

## Teknik yapı

- Next.js 16 (App Router, Turbopack), React 19, Tailwind 3. Sadece JS/JSX, TypeScript yok.
- Deploy: Vercel. Tüm sayfalar statik prerender ediliyor. Node >= 20.9 gerekli.
- Komutlar: `npm run dev`, `npm run build`, `npm start`. Test ve lint kurulumu yok; değişiklikten sonra `npm run build` ile doğrula.

```
lib/site.js             marka adı, açıklama, WhatsApp numarası, sosyal linkler + whatsappUrl(message)
app/
  layout.jsx            root layout, metadata (title template "%s | StayRoute"), MobileNav
  page.jsx              ana sayfa
  services/page.jsx     "Why Us" sayfası
  transfer/page.jsx     transfer formu -> hazır WhatsApp mesajı ("use client")
  tours/page.jsx        tur listesi, kategoriler, drag-scroll ("use client")
  tours/TourDetail.jsx  ortak tur detay şablonu (props ile)
  tours/<slug>/page.jsx her tur için ayrı sayfa
components/
  Navbar.jsx            üst menü + mobil çekmece menü (client)
  MobileNav.jsx         mobil alt menü + masaüstü WhatsApp butonu (layout'ta, her sayfada)
  Hero, Services, Fleet, Reviews, Footer
public/                 logo.png (320px), favicon.png (64px)
next.config.js          redirect: eski /tours/sapanca-masukıye -> /tours/sapanca-masukiye
```

## Kod kuralları

- Koyu tema: arka plan `#07111f`, vurgu rengi Tailwind `yellow-400/500`, kartlar `bg-white/5 border-white/10 rounded-[32px]`.
- Bölüm başlığı kalıbı: küçük sarı uppercase "eyebrow" + `text-4xl md:text-6xl font-black` başlık.
- Bileşenler default export, veriler dosyanın üstünde sabit dizi olarak tutuluyor.
- Import'lar relative (`../../../lib/site`).
- İç linkler `next/link` ile; WhatsApp ve harici linkler düz `<a>`.
- Önceden dolu WhatsApp mesajı: düz string yaz, `whatsappUrl(message)` encode eder. Mesajda marka için `${site.name}`.
- URL slug'ları sadece ASCII (Türkçe karakter yok).
- Çalışma dizinindeki dosyalar CRLF; `core.autocrlf=true` commit'te normalize ediyor.

## Tur sayfaları — iki farklı yapı

- **Şablon kullanan:** ephesus-ancient-city, gallipoli-tour, troy-ancient-city (`TourDetail`'e props verir).
- **Elle yazılmış (tekrar eden JSX):** bosphorus-dinner-cruise, luxury-yacht-tour, old-city-tour,
  cappadocia-experience (782 satır), princes-islands-tour, sapanca-masukiye, pamukkale-tour (şablonun kopyası).
- Yeni tur eklerken `TourDetail` kullan; tur ayrıca `app/tours/page.jsx` içindeki `categories` dizisine eklenmeli.

## Bilinen sorunlar

- Yorumlar (`Reviews.jsx`) uydurma isimler.
- Harici sitelerden hotlink görseller (otoyazar.com, shouf.io, gstatic thumbnail, tripadvisor, izmirburaya).
  Bazı Unsplash görselleri konuyla alakasız: Gallipoli hero bir plaj fotoğrafı, Troy ile Sapanca aynı görseli kullanıyor,
  ana sayfadaki eSIM kartında otel odası görseli var.
- eSIM, tur listesinde "Istanbul Experiences" kategorisinde duruyor ama bir tur değil.
- Tur paketlerinde fiyat yok; "Select Package" butonları hazır mesajsız WhatsApp açıyor (Sapanca hariç).
- Transfer formu: doğrulama yok, geçmiş tarih seçilebiliyor, state doğrudan mutate ediliyor
  (`updated[index].name = ...`), uçuş no / saat / otel / bagaj alanları yok, gereksiz cinsiyet alanı var.
- `tours/page.jsx` drag-scroll için DOM'a cleanup'sız event listener ekliyor.
- Hiç sayfa bazlı metadata/OG, sitemap, robots, özel 404 yok.

## Yol haritası

Durumlar: [ ] yapılacak, [x] tamam. İş bitince burayı güncelle.

### Faz 0 — Hızlı düzeltmeler (tamamlandı)
- [x] `lib/site.js`: marka adı, WhatsApp numarası, sosyal linkler tek yerde
- [x] Marka adı her yerde StayRoute; Pell Palace linkleri ve otele özgü metinler kaldırıldı
- [x] Mobil alt menü ve WhatsApp butonu `layout.jsx`'te (MobileNav)
- [x] İç linklerde `next/link`
- [x] Zoom kilidi kaldırıldı, ikon butonlara `aria-label`
- [x] `sapanca-masukıye` -> `sapanca-masukiye` (308 redirect ile)
- [x] Next 16 / React 19'a yükseltme, `package-lock.json` (npm audit: 0 açık)
- [x] Logo 828 KB -> 34 KB, favicon 2.7 KB
- [x] İşlevsiz butonlar: Fleet -> transfer formuna link, tur kategorisi "Explore" kaldırıldı, ana sayfa servis kartları link oldu
- [ ] Gerçek WhatsApp numarası (en son eklenecek)

### Faz 1 — Yapı ve SEO
- [ ] Turları `data/tours.js`'e taşı, `app/tours/[slug]/page.jsx` + `generateStaticParams`
- [ ] Sayfa bazlı `generateMetadata` (title, description, OpenGraph)
- [ ] `app/sitemap.js`, `app/robots.js`, özel `not-found.jsx`
- [ ] Görselleri `public/`'e al veya `next/image` + `remotePatterns` kullan; alakasız görselleri değiştir
- [ ] eSIM'i turlardan ayır (`/esim`)

### Faz 2 — Dönüşüm
- [ ] Her tur/paket butonu için hazır WhatsApp mesajı (tur + paket adı)
- [ ] Paketlere "from €..." fiyat bilgisi
- [ ] Transfer formunu geliştir: yön, uçuş no, saat, otel/adres, bagaj, çocuk koltuğu, telefon, doğrulama
- [ ] Gerçek Google/TripAdvisor yorumları

### Faz 3 — Concierge özellikleri
- [ ] Çoklu dil (EN / TR / AR / RU / DE), örn. `next-intl`
- [ ] Şehir rehberi / faydalı bilgiler (ulaşım, para, acil numaralar)
- [ ] Partner oteller için QR kodlu yönlendirme (isteğe bağlı, otele bağlı olmadan)

### Faz 4 — İleri seviye
- [ ] Talepleri kaydeden backend (e-posta, Google Sheets veya veritabanı) ve basit admin paneli
- [ ] Online ödeme (iyzico/Stripe), özellikle eSIM ve turlar için
- [ ] Analytics ve WhatsApp tıklama takibi
- [ ] İçerik düzenleme için CMS

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
