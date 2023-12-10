'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/nav';
import styles from '@/styles/Index.module.css';
import { useState } from 'react';
import { Inter, Poppins, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Contact() {
    // const [name, setName] = useState(''); // i'll see if theres any use for usestate on this page later

    return (
        <>
            <Head>
                <title>FORMALISER.NET | Contact</title>
                <meta name="description" content="Contact FORMALISER.NET." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <div className={[styles.body, 'px-3'].join(' ')}>
                <Navbar />
                <header className={styles.Cheader}>
                    <h1 className={[styles.title, poppinsBold.className].join(' ')}>
                        CONTACT
                    </h1>
                    <p className={styles.subtitle}>
                        Contact us at <Link className='underline hover:no-underline' href="mailto:info@formaliser.net">info@formaliser.net</Link>
                    </p>
                </header>
                <main className={[styles.main, 'flex flex-col items-center justify-center w-full'].join(' ')}>
                    <div className={[styles.grid, 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2'].join(' ')}>
                        <div className={[styles.card, 'transition-all duration-1000 hover:scale-105 p-6 text-center'].join(' ')}>
                            <h3 className={[styles.cardTitle, poppinsBold.className].join(' ')}>
                                Email
                            </h3>
                            <p className={[styles.cardText, roboto.className].join(' ')}>
                                <Link className='underline hover:no-underline' href="mailto:info@formaliser.net">
                                    info@formaliser.net
                                </Link>
                            </p>
                        </div>
                        <div className={[styles.card, 'transition-all duration-1000 hover:scale-105 p-6 text-center'].join(' ')}>
                            <h3 className={[styles.cardTitle, poppinsBold.className].join(' ')}>
                                GitHub
                            </h3>
                            <p className={[styles.cardText, roboto.className].join(' ')}>
                                <Link className='underline hover:no-underline' href="https://github.com/mbfrias/formaliser.net">
                                    mbfrias/formaliser.net
                                </Link>
                            </p>
                        </div>
                        <div className={[styles.card, 'transition-all duration-1000 hover:scale-105 p-6 text-center'].join(' ')}>
                            <h3 className={[styles.cardTitle, poppinsBold.className].join(' ')}>
                                Twitter
                            </h3>
                            <p className={[styles.cardText, roboto.className].join(' ')}>
                                <Link className='underline hover:no-underline' href="https://twitter.com/t_ub3">
                                    @t_ub3 (our glorious creator and maintainer and the only person working on this project)
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div id="cform" className='flex flex-col items-center justify-center w-full'>
                        <h2 className={[styles.FTsubtitle, poppinsBold.className].join(' ')}>
                            Or use this form
                        </h2>
                        <p className='text-xs text-white text-center'>(you'll never guess what backend we're using)</p>
                        <form className={[styles.form, 'flex flex-col items-center justify-center w-full p-2'].join(' ')} action="https://formaliser.net/send?to=info@formaliser.net" method="POST">
                            <label className='text-white text-xl font-bold' htmlFor="name">Name</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 text-black text-lg font-bold'].join(' ')} type="text" name="name" id="name" placeholder="John Doe" />
                            <label className='text-white text-xl font-bold' htmlFor="email">Email</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 text-black text-lg font-bold'].join(' ')} type="email" name="email" id="email" placeholder="panic@thedis.co" />
                            <label className='text-white text-xl font-bold' htmlFor="message">Subject</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 text-black text-lg font-bold'].join(' ')} type="text" name="subject" id="subject" placeholder="Help with... Regarding..." />
                            <label className='text-white text-xl font-bold' htmlFor="message">Message</label>
                            <textarea className={[styles.input, 'w-full rounded-xl p-2 text-black text-lg font-bold'].join(' ')} name="message" id="message" placeholder="According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Bees are like very small, furry helicopters." />
                            <button className={[styles.button, 'w-full rounded-xl p-2 text-black text-lg font-bold'].join(' ')} type="submit">Send</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}