import Head from 'next/head'
import { Footer } from '.'

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Housekeepers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-gray-100">
          {props.children}
        </div>
        <Footer></Footer>        
      </main>
    </>
)
}