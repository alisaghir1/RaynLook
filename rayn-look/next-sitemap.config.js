/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://raynlook.com',
  generateRobotsTxt: true, // (optional)
  // optional
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://rayn-look.com/sitemap.xml',
    ],
  },
  exclude: ['/checkout/*', '/admin/*', '/api/*'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/products'),
    await config.transform(config, '/cart'),
    await config.transform(config, '/faq'),
    await config.transform(config, '/privacyPolicy'),
  ],
}