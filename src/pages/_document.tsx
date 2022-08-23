import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="AtomCodes (atomcodes#7973)" />
          <meta name="copyright" content="AtomCodes" />
          <meta name="designer" content="AtomCodes (atomcodes#7973)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="keywords"
            content="Cloud connect vps minecraft servidor server mods hospedagem cpanel aplicações nodejs"
          />
          <meta property="og:title" content="Cloud Connect" />
          <meta
            property="og:description"
            content="Nós somos a CloudConnect, uma empresa focada em trazer o que há de mais novo e inovador para nossos clientes, contando sempre com aquele suporte incrível."
          />
          <meta property="og:url" content="https://atomcodes.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/brand/favicon.png" />
          <meta property="twitter:image" content="/brand/favicon.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Nós somos a CloudConnect, uma empresa focada em trazer o que há de mais novo e inovador para nossos clientes, contando sempre com aquele suporte incrível."
          />
          <meta
            name="description"
            content="Nós somos a CloudConnect, uma empresa focada em trazer o que há de mais novo e inovador para nossos clientes, contando sempre com aquele suporte incrível."
          />
          <link rel="shortcut icon" href="/brand/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nova+Flat&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
