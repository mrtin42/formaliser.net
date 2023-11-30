'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/nav'
import { Tooltip } from '@nextui-org/react'
import { useState } from 'react'
import { Inter, Poppins, Roboto } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import tooltipStyles from '@/styles/Tooltip.module.css'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });


export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <html lang="en">
      <Head>
        <title>FORMALISER.NET</title>
        <meta name="description" content="The simplest backend for your HTML contact forms." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-indigo-300">
        <div>
          <Navbar />
          <header className={styles.header}>
            <p className={styles.sh}>boo!</p>
            <h1 className={[styles.title, poppinsBold.className].join(' ')}>
              FORMALISER.NET
            </h1>
            <p className={styles.subtitle}>
              The simplest backend for your HTML contact forms.
            </p>
            <div className={styles.copybox}>
              <p className={styles.copytext}>https://formaliser.net/send?to=your@emailaddress.com</p>
            </div>
          </header>
          <main className="flex flex-col items-center justify-center flex-1 text-center">
            {/* really not enjoying css modules rn, hopping to tailwind from here */}
            <div className="flex flex-wrap items-center justify-center w-full bg-gray-800">
              <div className="flex flex-wrap items-center justify-center max-w-4xl sm:w-full">
                <p className="mt-6 pb-2 text-3xl text-center self-center text-white rounded-xl">No sign up, no configuration, no hassle.</p>
                <p className="pt-2 mb-6 text-xl text-center text-white">Secure, reliable, and easy to use; FORMALISER.NET is the simplest way to get your HTML contact forms working with no need for you to write any code.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center max-w-8/10 sm:w-full">
                <div className="flex flex-col items-center justify-center w-full p-6 m-6 bg-white rounded-xl">
                  <p className="text-3xl text-center text-gray-800">How does it work?</p>
                  <p className="mt-6 text-xl text-center text-gray-800">Simply use our URL as the action for your HTML form, and we'll take care of the rest.</p>
                  <div className={tooltipStyles.tooltip}>
                    <button className="text-xl text-center text-white-800 p-2 bg-gray-700 rounded-xl" onClick={() => {navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000);}}>
                      <code className="text-base">
                        {`<form action="https://formaliser.net/send?to=your@emailaddress.com">`}
                      </code>
                    </button>
                    <span className={tooltipStyles.tooltiptext}>{isCopied ? 'Copied!' : 'Click to copy'}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center w-8/10 p-6 m-6 bg-white rounded-xl">
                  <p className="text-3xl text-center text-gray-800">Secure</p>
                  <p className="mt-6 text-xl text-center text-gray-800">The data goes straight to your inbox and is only stored in runtime memory.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-8/10 p-6 m-6 bg-white rounded-xl">
                  <p className="text-3xl text-center text-gray-800">Reliable</p>
                  <p className="mt-6 text-xl text-center text-gray-800">Powered by Vercel and Mailersend, you can rest assured the best services are helping you and your customers.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-8/10 p-6 m-6 bg-white rounded-xl">
                  <p className="text-3xl text-center text-gray-800">Priceless (literally)</p>
                  <p className="mt-6 text-xl text-center text-gray-800">We don't charge a penny for this service (yet) - and we don't plan on paywalling any essential features.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full bg-indigo-300 p-3">
              <p className="text-3xl text-center text-gray-800 pt-3">Ready to simplify contact forms?</p>
              <p className="mt-6 text-xl text-center text-gray-800">Get started now by using the URL below as the action for your HTML form.</p>
              <div className={tooltipStyles.tooltip}>
                <button className="text-xl text-center text-white-800 p-2 bg-gray-700 rounded-xl" onClick={() => {navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress');}}>
                  <code className="text-base">
                    https://formaliser.net/send?to=your@email
                  </code>
                </button>
                <span className={tooltipStyles.tooltiptext}>{isCopied ? 'Copied!' : 'Click to copy'}</span>
              </div>
            </div>
          </main>
          <footer className="flex items-center justify-center w-full h-24 border-t">
            <a
              className="flex items-center justify-center text-center text-gray-500 "
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className="flex items-center justify-center h-4 ml-2">
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}