import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Domains from '@/components/dashboard/domains';
import { Dashnav as Navbar } from '@/components/ui';
import { useSession } from 'next-auth/react';
import styles from '@/styles/Dash.module.css';
import '@/styles/globals.css';

export default function Dashboard() {
    // nothing yet, give me a mo 

    // I SAID GIVE ME A MO

    // oh wait i still need to return some stupid placeholder

    return (
        <>
            <Head>
                <title>Dashboard | {process.env.SITENAME}</title>
            </Head>
            <Navbar />
            <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                <header className="flex flex-col w-full justify-center flex-1 px-2 text-center h-1/6">
                    <h1 className={["text-6xl font-bold", styles.shadow].join(' ')}>
                        Welcome to your dashboard.
                    </h1>
                    <p className="text-3xl font-medium drop-shadow-lg">
                        You are currently logged in as nobodt. <Link href="/api/auth/signout" className='underline hover:no-underline'>Logout</Link>
                    </p>
                </header>
                <main className="flex flex-col items-center w-full justify-center flex-1 px-2 mx-5 text-center rounded-t-3xl bg-slate-200 text-slate-900">
                    <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
                        <h2 className="text-4xl font-bold">Your domains</h2>
                    </div>
                    {/* <Domains uemail= /> */}
                </main>
                <footer className="flex flex-col items-center justify-center w-full h-1/6">
                    {/* <Footer /> */}
                </footer>
            </div>
        </>
    )

    // ok i'm done
}