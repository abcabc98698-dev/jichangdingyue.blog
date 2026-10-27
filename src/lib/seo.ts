import { alternate } from './urls';

export function pageMetadata(origin: string, base: string, pathname: string, title: string, description: string) {
  const canonicalPath = pathname.replace(/\/$/, '') || '/';
  const prefix = '/' + base.split('/').filter(Boolean).join('/');
  return {
    title,
    description,
    canonical: new URL(canonicalPath, origin).href,
    alternates: {
      'zh-CN': new URL(alternate(pathname, 'zh-CN', base), origin).href,
    },
    image: new URL(`${prefix === '/' ? '' : prefix}/og-image.png`, origin).href,
  };
}

export function robotsBody(origin: string, base: string): string {
  const prefix = '/' + base.split('/').filter(Boolean).join('/');
  const sitemapXml = new URL(`${prefix === '/' ? '' : prefix}/sitemap.xml`, origin).href;
  const sitemapIndex = new URL(`${prefix === '/' ? '' : prefix}/sitemap-index.xml`, origin).href;
  return `# robots.txt for https://jichangdingyue.blog
User-agent: *
Allow: /
Disallow: /go/

# Major Search Engine Crawlers
User-agent: Googlebot
Allow: /
Disallow: /go/

User-agent: bingbot
Allow: /
Disallow: /go/

User-agent: Baiduspider
Allow: /
Disallow: /go/

User-agent: yisouspider
Allow: /
Disallow: /go/

Sitemap: ${sitemapXml}
Sitemap: ${sitemapIndex}
`;
}
