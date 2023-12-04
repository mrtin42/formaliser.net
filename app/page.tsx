'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/nav'
import Email from '@/components/examplemail'
import { Tooltip } from '@nextui-org/react'
import { useState } from 'react'
import { Inter, Poppins, Roboto } from 'next/font/google'
import styles from '@/styles/Index.module.css'
import tooltipStyles from '@/styles/Tooltip.module.css'
// import { render } from '@react-email/render'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

// export const RenderedExample = () => {
//     return render(
//         <Email name="John Doe" email="j@o.hn" subject='Hello' message='Hello world!' />,
//         { pretty: true }
//     )

// }

export default function Home() {
    const [isCopied, setIsCopied] = useState(false);
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>FORMALISER.NET</title>
                <meta name="description" content="The simplest backend for your HTML contact forms." />
                <link style={{}} rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" />
                <link style={{}} rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
                <link style={{}} rel="stylesheet" href="/failwind.css" />
                <link style={{}} rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="formaliser, formaliser.net, formaliser, forms, form, html, backend, contact, contact form, contact form backend, html form, html form backend, html contact form" />
                <meta name="author" content="MBFRIAS" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="generator" content="marrtin.com using Next.js" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="msapplication-TileColor" content="#111827" />
                <meta name="theme-color" content="#111827" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content="FORMALISER.NET" />
                <meta name="twitter:description" content="The simplest backend for your HTML contact forms." />
                <meta name="twitter:image" content="https://beta.formaliser.net/og.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="FORMALISER.NET" />
                <meta property="og:description" content="The simplest backend for your HTML contact forms." />
                <meta property="og:image" content="https://beta.formaliser.net/og.png" />
                <meta property="og:url" content="https://beta.formaliser.net" />
                <meta property="og:site_name" content="FORMALISER.NET" />
            </Head>
            <div className={styles.body}>
                <Navbar />
                <header className={[styles.header, 'flex flex-col items-center justify-center w-full bg-slate-900'].join(' ')}>
                    <p className="pt-7" style={{color: 'transparent'}}>.</p>
                    <h1 className={[styles.title, poppinsBold.className].join(' ')}>
                        FORMALISER.NET
                    </h1>
                    <p className={styles.subtitle}>
                        The simplest backend for your HTML contact forms.
                    </p>
                    <div className={tooltipStyles.tooltip}>
                        <button className="text-xl text-center text-white-800 p-2 bg-gray-700 rounded-xl" onClick={() => {navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress.com'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000);}}>
                        <code className="text-base">
                            {`<form action="https://formaliser.net/send?to=your@emailaddress.com" method="POST">`}
                        </code>
                        </button>
                        <span className={tooltipStyles.tooltiptext}>{isCopied ? 'Copied!' : 'Click to copy URL'}</span>
                    </div>
                </header>
                <main className={[styles.main, 'flex flex-col items-center justify-center w-full'].join(' ')}>
                    <div className="flex flex-row items-center justify-center w-full p-10">
                        <div id="code" className='flex flex-col items-center justify-center w-full p-2 bg-slate-900 rounded-xl'>
                            <div className="block w-full p-2 text-left font-mono">
                                <p>index.html</p>
                            </div>
                            <hr className="w-full" />
                            <div className="block w-full p-2 text-left font-mono">
                                <code className="text-base" lang='html' style={{fontSize: '0.8rem'}}>
                                    {`<form action="https://formaliser.net/send?to=your@emailaddress.com" method="POST">`}
                                    <br />
                                    {`      <!-- your form fields -->                                   `}    
                                    <br />
                                    {`</form>                                                             `}
                                </code>
                            </div>
                            <p className="text-xs text-center text-white-800">that's it.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full p-10 notgrid'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                No more PHP, Node, or Python. We handle the backend for you.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                                Just add a few lines of code to your HTML form, and you're good to go. We'll take care of the rest. You focus on what you're making, and we'll focus on making sure people can reach you.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full p-10 notgrid">
                        <div className='flex flex-col items-center justify-center w-full p-10 notgrid'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                Rapid parsing and delivery of your form data, powered by Resend.com.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                                We use Resend.com's <Link className=' underline hover:no-underline' href="https://react.email/">React-Email</Link> to parse your form data and their powerful SMTP servers to deliver it to you in a simple HTML format and a plain text fallback, meaning you can rest assured that the best network of servers in the world is making contact forms work for you, as well as all of your devices. Even your wearable devices.
                            </p>
                        </div>
                        <div id="mail-iframe" className='flex flex-col items-center justify-center w-full p-2 bg-slate-900 rounded-xl'>
                            <Email name="John Doe" email="doej@example.net" subject='Hello' message='Hello world!' />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full p-10 notgrid">
                        <div className='flex flex-col items-center justify-center w-full p-2 bg-slate-900 rounded-xl'>
                            <Image src="/replyto_eg.png" width={600} height={400} alt="screenshot of an email composer's metadata box, showing the recipient field filled as the email field from the webform submission." className='rounded-xl'/>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full p-10 notgrid'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                Reply to your form submissions with a single click.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                                We'll automatically set the reply-to field of your email to the email address provided in the form, meaning you can reply to your form submissions with a single click. No more copy-pasting email addresses, no more typos, and even better, an organised email thread.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row w-full p-10'>
                        <div className='flex flex-col items-center justify-center w-full mx-3 drop-shadow-2xl p-10 rounded-2xl bg-slate-700'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                We don't store your data. We don't even get a glimpse of your data.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                            Privacy and security is at the heart of what we do. We don't store anything that goes through our system beyond the runtime of the request, meaning we can't even charge you if we wanted to. We don't even store your email address - its always defined in the form action attribute, meaning it only exists in the runtime, meaning we're completely blind to it.                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full mx-3 drop-shadow-2xl p-10 rounded-2xl bg-slate-700'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                We won't charge you a dime just to get your contact form working.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                                FORMALISER.NET will always be free to start using. We may add a premium tier in the future, but we'll always have a free tier that will be more than enough for most people. We're not here to make money, and as much as we may need to given how sucky the UK government is at handling an economy, we'll never charge you for the core functionality of our service.
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full mx-3 drop-shadow-2xl p-10 rounded-2xl bg-slate-700'>
                            <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                                Our service is open source, and we're always looking for contributors.
                            </h2>
                            <p className="text-lg text-center text-white-800">
                                As amazing as we like to think we are, we're not perfect. We're always looking for people to help us improve our service, and we're always looking for people to help us make our service more secure. If you're interested in helping us out, or just want to see how we do things, check out our <Link className='underline hover:no-underline' href="https://github.com/mbfrias/formaliser.net">GitHub repository</Link>.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full p-10 notgrid' >
                        <h2 className={[styles.subtitle, poppins.className].join(' ')}>
                            We're still in beta, but we're working hard to get to a stable release.
                        </h2>
                        <p className="text-lg text-center text-white-800">
                            In the meantime, you can still use our service. Just don't be suprised if you find a bug or two, or if the service is down for a few moments. If you do find a bug, please report it on an issue on our <Link className='underline hover:no-underline' href="https://github.com/mbfrias/formaliser.net">GitHub repository</Link>, or if you're feeling generous, fix it yourself and submit a pull request. Alternatively, <Link className='underline hover:no-underline' href="mailto:info@formaliser.net">email us</Link>.
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full p-10 notgrid'>
                        <h2 className={['text-5xl drop-shadow-2xl',styles.cta, poppins.className].join(' ')}>
                            Simplify your contact forms today.
                        </h2>
                        <p className="text-lg text-center text-white-800">
                            We'll handle the backend for you.
                        </p>
                        <div className={tooltipStyles.tooltip}>
                            <button className="text-xl text-center text-white-800 p-2 bg-gray-700 rounded-xl" onClick={() => {navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress.com'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000);}}>
                            <code className="text-base">
                                {`<form action="https://formaliser.net/send?to=your@emailaddress.com" method="POST">`}
                            </code>
                            </button>
                            <span className={tooltipStyles.tooltiptext}>{isCopied ? 'Copied!' : 'Click to copy URL'}</span>
                        </div>
                    </div>
                </main>
                <footer className={[styles.footer, 'flex flex-col items-center justify-center w-full h-3/10 bg-slate-900'].join(' ')}>
                    <div className='flex flex-col items-center justify-center w-full p-1 pt-5 notgrid'>
                        <Image src="/formaliser.svg" width={500} height={100} alt="FORMALISER.NET" className='shadow-lg bg-slate-400 rounded-2xl shadow-slate-300'/>
                        <p className="text-lg text-center text-white-800 mt-2">
                            © 2023 FORMALISER.NET
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full mt-1 p-1 pb-5 notgrid'>
                        <p className={["text-lg text-center text-white-800", inter.className].join(' ')}>
                            Made with <span className="text-red-500">❤</span> by <Link className='underline hover:no-underline' href="https://marrtin.com">MAЯTÍN</Link>.
                        </p>
                    </div>  
                </footer>
            </div>
        </>
    )
}