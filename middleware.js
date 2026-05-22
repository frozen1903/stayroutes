import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'tr', 'ru', 'ar'],
  defaultLocale: 'en'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
