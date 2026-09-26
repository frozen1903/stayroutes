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
lib/site.js             marka adı, site URL'i, açıklama, WhatsApp numarası, sosyal linkler + whatsappUrl(message)
lib/imageLoader.js      next/image loader: Unsplash görsellerini Unsplash CDN'inden boyutlandırır
data/tours/
  index.js              tours listesi (sıra = /tours sırası), categories, getTour(), toursInCategory()
  <slug>.js             her turun tüm içeriği (metin, görseller, paketler, SSS...)
app/
  layout.jsx            root layout, metadataBase, varsayılan OpenGraph, MobileNav
  page.jsx              ana sayfa
  tours/page.jsx        tur listesi (data'dan, kategori bazlı)
  tours/[slug]/page.jsx tüm tur detay sayfaları (generateStaticParams + generateMetadata, dynamicParams=false)
  transfer/page.jsx     metadata + TransferPage.jsx (client, form -> hazır WhatsApp mesajı)
  esim/page.jsx         eSIM paketleri
  services/page.jsx     "Why Us"
  sitemap.js, robots.js, not-found.jsx
components/
  TourDetail.jsx        tur detay şablonu; tüm bölümler veriye göre isteğe bağlı render edilir
  DragScroll.jsx        masaüstünde sürükleyerek yatay kaydırma (client)
  Navbar.jsx            üst menü + mobil çekmece menü (client)
  MobileNav.jsx         mobil alt menü + masaüstü WhatsApp butonu (layout'ta, her sayfada)
  Hero, Services, Fleet, Reviews, Footer
public/                 logo.png (320px), favicon.png (64px)
next.config.js          custom image loader; redirect'ler: /tours/sapanca-masukıye, /tours/e-sim -> /esim
```

## Kod kuralları

- Koyu tema: arka plan `#07111f`, vurgu rengi Tailwind `yellow-400/500`, kartlar `bg-white/5 border-white/10 rounded-[32px]`.
- Bölüm başlığı kalıbı: küçük sarı uppercase "eyebrow" + `text-4xl md:text-6xl font-black` başlık.
- Bileşenler default export, veriler dosyanın üstünde sabit dizi olarak tutuluyor.
- Import'lar relative (`../../../lib/site`).
- İç linkler `next/link` ile; WhatsApp ve harici linkler düz `<a>`.
- Önceden dolu WhatsApp mesajı: düz string yaz, `whatsappUrl(message)` encode eder. Mesajda marka için `${site.name}`.
- Görseller `next/image` ile (`fill` + `sizes`, parent `relative` ve yükseklikli). Sadece Unsplash
  (`images.unsplash.com/photo-...`, ücretsiz lisans) veya `public/` görselleri kullan; başka sitelerden hotlink yok.
- URL slug'ları sadece ASCII (Türkçe karakter yok).
- Next 16: `params` bir Promise, `await params` ile okunur. Değişiklik yapmadan önce `node_modules/next/dist/docs/` kontrol et.
- Çalışma dizinindeki dosyalar CRLF; `core.autocrlf=true` commit'te normalize ediyor.

## Tur ekleme / düzenleme

- Yeni tur: `data/tours/<slug>.js` oluştur (mevcut bir turu kopyala), `data/tours/index.js`'deki listeye ekle. Başka bir şey gerekmez;
  sayfa, liste kartı, sitemap ve metadata otomatik oluşur.
- Zorunlu alanlar: slug, category ('istanbul' | 'beyond'), card {name, description, image}, eyebrow, title, heroImage, intro,
  aboutTitle, aboutText. Diğer tüm bölümler isteğe bağlı: secondaryText, inclusions, stats, aboutImage, highlights(+Title/Text),
  timeline(+Title), details(+Eyebrow/Title), packages(+Title), gallery(+Title), faq, cta, seoTitle.
- Paket "Select Package" ve "Reserve" butonları tur + paket adını içeren hazır WhatsApp mesajı açar.

## Bilinen sorunlar

- Yorumlar (`Reviews.jsx`) uydurma isimler.
- Transfer formu: doğrulama yok, geçmiş tarih seçilebiliyor, state doğrudan mutate ediliyor
  (`updated[index].name = ...`), uçuş no / saat / otel / bagaj alanları yok, gereksiz cinsiyet alanı var.

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

### Faz 1 — Yapı ve SEO (tamamlandı)
- [x] Turlar `data/tours/`'a taşındı, tek `app/tours/[slug]/page.jsx` + `generateStaticParams`
- [x] Sayfa bazlı metadata (title, description, canonical, OpenGraph)
- [x] `app/sitemap.js`, `app/robots.js`, özel `not-found.jsx`
- [x] Alakasız ve hotlink görseller Unsplash görselleriyle değiştirildi, `next/image` + Unsplash loader
- [x] eSIM turlardan ayrıldı (`/esim`)

### Faz 2 — Dönüşüm
- [x] Her tur/paket butonu için hazır WhatsApp mesajı (tur + paket adı)
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
