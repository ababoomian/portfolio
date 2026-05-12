import { SITE } from "@/content/site";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: ReadonlyArray<string>;
};

/**
 * Renders document metadata. React 19 hoists <title>, <meta> and <link>
 * to <head> automatically, so this works in a plain SPA.
 */
export function Seo({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
  keywords,
}: SeoProps) {
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const url = `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
  const fullImage = image.startsWith("http") ? image : `${SITE.url}${image}`;
  const keywordContent = (keywords ?? SITE.keywords).join(", ");

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      {/* <meta name="twitter:card" content={SITE.twitterCard} /> */}
      {/* <meta name="twitter:title" content={fullTitle} /> */}
      {/* <meta name="twitter:description" content={description} /> */}
      {/* <meta name="twitter:image" content={fullImage} /> */}
    </>
  );
}
