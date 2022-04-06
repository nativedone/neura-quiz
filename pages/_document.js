import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          {/* <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/myriad-pro-bold-condensed-700.woff2"
            crossOrigin=""
          /> */}

          <link rel="stylesheet" href="https://use.typekit.net/awf4vkd.css" />
        </Head>
        <body>
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
