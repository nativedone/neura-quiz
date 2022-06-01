import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@theme";

import * as gtag from "@lib/gtm";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/neo-sans-regular-400.woff2"
            crossOrigin=""
          />

          <link rel="preload" as="video" href="/assets/922×1920.mp4" />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtag.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
