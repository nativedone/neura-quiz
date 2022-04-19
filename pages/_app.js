import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

import * as gtag from "@lib/gtm";
import "@styles/globals.css";

import { disableBodyScroll } from "body-scroll-lock";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const targetElement = document.querySelector("body");
    disableBodyScroll(targetElement);
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="share-api-polyfill"
        strategy="lazyOnload"
        src="https://unpkg.com/share-api-polyfill/dist/share-min.js"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
