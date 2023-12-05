'use client'

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/nav';
import styles from '@/styles/Contact.module.css';
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
            <Navbar />
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <h1 className='font-poppins text-6xl font-bold'>
                    Contact
                </h1>
                <p className='font-inter text-2xl mt-4'>
                    Send us a message.
                </p>
                <div className={styles.form}>
                    <form action="https://beta.formaliser.net/send?to=info@formaliser.net" method="POST">
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Dohn Joe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="panic@thedis.co" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Leave empty for no subject" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="The mitochondria is the powerhouse of the cell. Anyways, here's Wonderwall." />
                        </div>
                        <div className={styles.formGroup}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}