import { SEO } from "@components/seo";
import { Layout } from "@components/layout";
import { Homepage } from "@feature/home-page";

export default function InitialRoute() {
  return (
    <>
      <SEO />
      <Layout animateHeaderOnScroll shouldStickyHeader>
        <Homepage />
      </Layout>
    </>
  );
}
