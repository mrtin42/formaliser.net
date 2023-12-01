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
        <>
            <Head>
                <title>FORMALISER.NET</title>
                <meta name="description" content="The simplest backend for your HTML contact forms." />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.body}>
                <Navbar />
                <header className={[styles.header, 'flex flex-col items-center justify-center w-full h-screen bg-slate-900'].join(' ')}>
                    <p className="pt-7" style={{color: 'transparent'}}>.</p>
                    <h1 className={[styles.title, poppinsBold.className].join(' ')}>
                        FORMALISER.NET
                    </h1>
                    <p className={styles.subtitle}>
                        The simplest backend for your HTML contact forms.
                    </p>
                    <div className={tooltipStyles.tooltip}>
                    <button className="text-xl text-center text-white-800 p-2 bg-gray-700 rounded-xl" onClick={() => {navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000);}}>
                      <code className="text-base">
                        {`<form action="https://formaliser.net/send?to=your@emailaddress.com">`}
                      </code>
                    </button>
                    <span className={tooltipStyles.tooltiptext}>{isCopied ? 'Copied!' : 'Click to copy URL'}</span>
                  </div>
                </header>
                <main className={[styles.main, 'flex flex-col items-center justify-center w-full'].join(' ')}>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h2 className='text-5xl font-sans font-bold text-center'>
                            No signup, no configuration, no hassle.
                        </h2>
                        <p className={[styles.description, poppins.className].join(' ')}>
                            Formaliser.net is a simple backend for your HTML contact forms. It's free to use, and you can get started in just a few minutes.
                        </p>
                    </div>
                </main>
            </div>
        </>
    )
}