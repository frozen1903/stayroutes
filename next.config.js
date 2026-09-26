const nextConfig = {
  async redirects() {
    return [
      {
        // Eski Türkçe karakterli adres
        source: '/tours/sapanca-masuk%C4%B1ye',
        destination: '/tours/sapanca-masukiye',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
