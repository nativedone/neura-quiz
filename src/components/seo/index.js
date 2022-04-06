import Head from "next/head";

export function SEO({
  title = "Take the Quiz",
  description = "An ambulance pulls up in front of our hospital in Kenema, Sierra Leone. A mother gets out. She is holding a bundle in her arms with one leg hanging down limply.",
  author = {
    name: "Médecins Sans Frontières/Doctors without Borders news, opinion & stories",
    twitter: "@MSFAustralia",
  },
  image = {
    url: "/assets/21-MSF_OpenGraph_1200x630_FINAL.jpeg",
    alt: "Banner for changeand.co, featuring our tagline 'Do good. Better.'",
  },
  websiteUrl = "https://stories.msf.org.au/",
  meta = [],
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: websiteUrl,
    },
    {
      property: `og:image`,
      content: image.url,
    },
    {
      property: `og:image:alt`,
      content: image.alt,
    },
    {
      property: `og:image:width`,
      content: `1200`,
    },
    {
      property: `og:image:height`,
      content: `630`,
    },
    {
      property: `author`,
      content: author.name,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author.twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:image`,
      content: image.url,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map((values, i) => (
        <meta key={i} {...values} />
      ))}

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ee0000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
}
