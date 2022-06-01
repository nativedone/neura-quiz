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
    disableBodyScroll(targetElement, {
      allowTouchMove: (el) => {
        while (el && el !== document.body) {
          if (el.getAttribute("body-scroll-lock-ignore") !== null) {
            return true;
          }

          el = el.parentElement;
        }
      },
    });
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
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtag.GTM_ID}');
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
