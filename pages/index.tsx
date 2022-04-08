import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const socialmedia = [
  {
    img: './soundcloud-logo.png',
    url: 'https://soundcloud.com/joex92',
  },
  {
    img: './youtube-logo.png',
    url: 'https://youtube.com/c/joex92',
  },
  {
    img: './facebook-logo.png',
    url: 'https://facebook.com/JoeX92',
  },
  {
    img: './instagram-logo.png',
    url: 'https://instagram.com/J03X92',
  },
  {
    img: './twitter-logo.png',
    url: 'https://twitter.com/joex92',
  },
  {
    img: './tiktok-logo.png',
    url: 'https://tiktok.com/@joex92',
  },
  {
    img: './tumblr-logo.png',
    url: 'https://joex92.tumblr.com/',
  }
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-0">
      <Head>
        <title>JxM!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed flex top-0 h-auto w-full items-center justify-center border-b">
        <div className="flex flex-row w-full h-fit flex-nowrap items-center justify-center">
          {socialmedia.map((v,i)=><a
            href={v.url}
            className="min-w-fit rounded-none hover:text-red-600 focus:text-red-600 py-1 mx-auto"
            target="_blank">
            <img className="max-h-10" src={v.img}/>
          </a>)}
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <img className="min-w-fit" src="./JXMO-logo.png" />
        </h1>

        <p className="mt-3 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Coding & Music Production
          </code>
        </p>

      </main>

      <footer className="fixed bottom-0 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
