'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Loading from './loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Domains from '@/components/dashboard/domains';
import { Dashnav as Navbar } from '@/components/ui';
import Unauthenticated from './nosession';
import { useSession } from 'next-auth/react';
import styles from '@/styles/Dash.module.css';
import '@/styles/globals.css';

export default function Dashboard() {
    const { data: session, status } = useSession();
    if (status === 'loading') return <Loading />;
    if (status === 'unauthenticated') return <Unauthenticated />;   

    return (
        <>
            <Head>
                <title>Dashboard // FORMALISER.NET</title>
                <meta name="description" content="The simplest backend for your HTML contact forms." />
            </Head>
            <Navbar />
            <div className='h-screen'>
                <header className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center h-2/6">
                    <h1 className={["text-6xl font-bold", styles.shadow].join(' ')}>
                        Welcome to the <span className={styles.brandtitle}>FORMALISER.NET</span> dashboard.
                    </h1>
                    <p className="text-3xl font-medium drop-shadow-lg">
                        You are currently logged in as {session?.user?.email}. <Link href="/api/auth/signout" className='underline hover:no-underline'>Logout</Link>
                    </p>
                </header>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center rounded-3xl bg-slate-300 text-slate-900">
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <h2 className="text-4xl font-bold">Configuration</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <Domains uemail={session?.user?.email} />
                    </div>
                </main>
            </div>
        </>
    )
}