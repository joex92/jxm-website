import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const socialmedia = [
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/joex92',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/c/joex92',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/JoeX92',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/J03X92',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/joex92',
  },
  {
    name: 'Tumblr',
    url: 'https://joex92.tumblr.com/',
  }
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-0 border-b">
      <Head>
        <title>JxM!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="mt-0 flex flex-row w-full flex-nowrap items-center justify-around sm:w-full grid-cols-1">
          {socialmedia.map((v,i)=><a
            href={v.url}
            className="mt-0 w-auto rounded-none border border-y-0 p-3 text-center hover:text-red-600 focus:text-red-600"
          >
            <h4 className="text-sm font-bold">{v.name}</h4>
          </a>)}
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          JxM!
        </h1>

        <p className="mt-3 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Coding & Music Production
          </code>
        </p>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
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
