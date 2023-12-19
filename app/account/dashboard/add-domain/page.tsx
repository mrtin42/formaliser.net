'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Dashnav as Navbar } from '@/components/ui';
import Footer from '@/components/footer';
import Unauthenticated from '../nosession';
import { useSession } from 'next-auth/react';
import styles from '@/styles/Dash.module.css';
import axios from 'axios';
import '@/styles/globals.css';
import { useState } from 'react';

export default function AddDomain() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(false);

    if (status === 'loading') return <Loading />;
    if (status === 'unauthenticated') return <Unauthenticated />;

    return (
        <>
            <Head>
                <title>Add a domain | {process.env.SITENAME}</title>
            </Head>
            <Navbar />
            <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                <header className="flex flex-col w-full justify-center flex-1 px-2 text-center h-1/6">
                    <h1 className={["text-6xl font-bold", styles.shadow].join(' ')}>
                        Add a domain to your account.
                    </h1>
                    <p className="text-3xl font-medium drop-shadow-lg">
                        You are currently logged in as {session?.user?.email}. <Link href="/api/auth/signout" className='underline hover:no-underline'>Logout</Link>
                    </p>
                </header>
                <main className="flex flex-col items-center w-full justify-center flex-1 px-2 mx-5 text-center rounded-t-3xl bg-slate-200 text-slate-900">
                    <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
                        <h2 className="text-4xl font-bold">Add a domain</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="domain">
                                        Domain
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="domain" type="text" placeholder="example.com" />
                                    <p className="text-gray-600 text-xs italic">This is the domain you want to authorize to send FORMALISE.NET forms to your email address.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <button className="shadow bg-cyan-400 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => {
                                        setLoading(true);
                                        const res: any = axios.post('/api/db/domains', {
                                            email: session?.user?.email,
                                            domain: document.getElementById('domain')?.nodeValue
                                        });
                                        console.log(res);
                                        if (res.data.status === 'success') {
                                            alert('Domain added successfully.');
                                        } else {
                                            alert('Error adding domain.');
                                        }
                                        setLoading(false);
                                    }}>
                                        {
                                            loading ? (
                                                <FontAwesomeIcon
                                                    icon={faCircleNotch}
                                                    className="animate-spin text-6xl text-white mt-5"
                                                />
                                            ) : (
                                                "Add domain"
                                            )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}