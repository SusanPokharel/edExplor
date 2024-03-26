import Document, { Html, Head, Main, NextScript } from 'next/document';

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Essential meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Favicon */}
          <link rel="icon" href="/isling.png" />

          {/* Custom fonts or external stylesheets */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

          {/* Custom styles or global CSS */}
          <style>{`
            body {
              margin: 0;
              padding: 0;
              font-family: 'Roboto', sans-serif;
            }
            /* Add any other global styles */
          `}</style>

          {/* Any additional head elements */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
