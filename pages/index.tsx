import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'

const socialmedia = [
  {
    title: 'Soundcloud',
    img: './soundcloud-logo.png',
    url: 'https://soundcloud.com/joex92',
  },
  {
    title: 'Youtube',
    img: './youtube-logo.png',
    url: 'https://youtube.com/c/joex92',
  },
  {
    title: 'Facebook',
    img: './facebook-logo.png',
    url: 'https://facebook.com/JoeX92',
  },
  {
    title: 'Instagram',
    img: './instagram-logo.png',
    url: 'https://instagram.com/J03X92',
  },
  {
    title: 'Twitter',
    img: './twitter-logo.png',
    url: 'https://twitter.com/joex92',
  },
  {
    title: 'Tiktok',
    img: './tiktok-logo.png',
    url: 'https://tiktok.com/@joex92',
  },
  {
    title: 'Tumblr',
    img: './tumblr-logo.png',
    url: 'https://joex92.tumblr.com/',
  }
]

const fetchjson = async(url: string) => {
    const res = await fetch(url,{ method: 'GET', mode: 'no-cors' })
    console.log(res)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.',)
      // Attach extra info to the error object.
      // error.info = await res.json()
      // error.status = res.status
      throw error
    }
  
    return res.json()
}


const Home: NextPage = () => {
  const {data, error} = useSWR('https://mcapi.xdefcon.com/server/2b2t.org/motd/json',fetchjson)
  if ( error ) console.error(error)
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
            title={v.title}
            target="_blank">
            <img className="max-h-10" src={v.img}/>
          </a>)}
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          <a href="https://joex92.alwaysdata.net/" title="Portfolio Website"><img className="w-fit" src="./JXMO-logo.png" /></a>
        </h1>

        <p className="mt-3 text-2xl">
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            Coding & Music Production <br />
            {String(data)}
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

// export async function getServerSideProps(context: { query: any }){
//   const { query } = context
//   const { mcuser } = query
//   const querystring = mcuser
//   const response = await fetch(`http://skinsystem.ely.by/textures/${querystring}`)
//   const data = await response.json()
//   console.log(data)
//   return { 
//     props: {
//       eventList: data,
//     },
//    }
// }

export default Home
