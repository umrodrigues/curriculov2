import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from 'next/document'
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html>
          <Head>
            <link rel='shortcut icon' sizes='32/32' href='/favicon/favicon.webp' />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  