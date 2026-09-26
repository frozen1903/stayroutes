const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },

  async redirects() {
    return [
      {
        // Eski Türkçe karakterli adres
        source: '/tours/sapanca-masuk%C4%B1ye',
        destination: '/tours/sapanca-masukiye',
        permanent: true,
      },
      {
        // eSIM artık tur değil, ayrı sayfa
        source: '/tours/e-sim',
        destination: '/esim',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
