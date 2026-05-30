export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow known AI crawlers
      { userAgent: 'GPTBot',        allow: '/' },
      { userAgent: 'ClaudeBot',     allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot',     allow: '/' },
      { userAgent: 'Bingbot',       allow: '/' },
    ],
    sitemap: 'https://vlada-marchenko.vercel.app/sitemap.xml',
  }
}
