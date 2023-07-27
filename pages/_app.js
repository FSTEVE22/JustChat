import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>JustChat</title>
            <link rel='stylesheet' href='style.css' />
            <link
                rel='shortcut icon'
                type='image/x-icon'
                href='/logo.jpg'
            />
        </Head>
        <div className={`${inter.className} h-full`}>
            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp