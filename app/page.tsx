import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/nav'
import { Inter, Poppins, Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import styles from '@/styles/Index.module.css'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

interface Metadata {
  title: string
  description: string

}

export const metadata: Metadata = {
  title: 'FORMALISER',
  description: 'The simplest backend for your HTML contact forms.',
}

export default function Home() {

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          <header className={styles.header}>
            <h1 className={[styles.title, poppinsBold.className].join(' ')}>
              FORMALISER
            </h1>
            <p className={styles.description}>
              The simplest backend for your HTML contact forms.
            </p>
          </header>
          <main className={styles.main}>

          </main>
        </div>
      </body>
    </html>
  )
}