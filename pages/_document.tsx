import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    // @ts-ignore
    return (
      <Html>
        <Head>
          {/*  TODO i18n next*/}
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Fantasy Town - Harvest your dreams! Harvest happiness!</title>
          {/*  TODO i18n next*/}
          <meta
            /* eslint-disable-next-line max-len */
            content='Discover a fantasy world where you grow your farm, build and defend your town from the evil Trolls. Experience great adventures while exploring Fantasy Town.'
            name='description'
          />
          <meta name='google-site-verification' content='W5iUrbpu7EPqfaeNb2UTdRP5nibt7Tk2xrLhcjwT-D8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <link href='https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap' rel='stylesheet' />
          {/* OneTrust Cookies Consent Notice start for fantasy-town.com */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
              type='text/javascript'
              src='https://cdn.cookielaw.org/consent/baab9727-3069-42f1-aebb-da0df8f1e1bb/OtAutoBlock.js' ></script>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
              src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
              type='text/javascript'
              data-domain-script='baab9727-3069-42f1-aebb-da0df8f1e1bb' ></script>
          <script type='text/javascript'>
            function OptanonWrapper() { }
          </script>
          {/* OneTrust Cookies Consent Notice end for fantasy-town.com */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
