import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import DevDisclaimer from '@/components/dev';
import Navbar from '@/components/nav';
import SendButton from '@/components/sendbtn';
import Footer from '@/components/footer';
import styles from '@/styles/Index.module.css';
import { Inter, Poppins, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Font } from '@react-email/components';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const poppinsBold = Poppins({ weight: '700', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function Contact() {
    // const [x, setx] = useState(''); // i'll see if theres any use for usestate on this page later

    return (
        <>
            <Head>
                <title>FORMALISER.NET | Contact</title>
                <meta name="description" content="Contact FORMALISER.NET." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <script src="https://kit.fontawesome.com/3c4e7a03d3.js" crossOrigin="anonymous"></script>
            </Head>
            <div className={[styles.body].join(' ')}>
                <DevDisclaimer />   
                <Navbar />
                <header className={styles.Cheader}>
                    <h1 className={[styles.title, poppinsBold.className].join(' ')}>
                        CONTACT
                    </h1>
                    <p className={styles.subtitle}>
                        Contact us at <Link className='underline hover:no-underline' href="mailto:info@formaliser.net">info@formaliser.net</Link>
                    </p>
                </header>
                <main className={[styles.main, 'flex flex-col items-center justify-center w-full px-4'].join(' ')}>
                    <div className={[styles.grid, 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2'].join(' ')}>
                        <div className={[styles.card, 'transition-all duration-1000 hover:scale-105 p-6 text-center'].join(' ')}>
                            <p className='text-5xl'><FontAwesomeIcon icon={faEnvelope} /></p>
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
                            <p className='text-5xl'><FontAwesomeIcon icon={faGithub} /></p>
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
                            <p className='text-5xl'><FontAwesomeIcon icon={faTwitter} /></p>
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
                        <form className={[styles.form, 'flex flex-col items-center justify-center w-full p-2 px-10'].join(' ')} action="/send?to=martin@mbfrias.co.uk" method="POST" suppressHydrationWarning={true}>
                            <label className='text-white text-xl font-bold' htmlFor="name">Name</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 my-1 text-black text-lg'].join(' ')} type="text" name="name" id="name" placeholder="John Doe" />
                            <label className='text-white text-xl font-bold' htmlFor="email">Email</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 my-1 text-black text-lg'].join(' ')} type="email" name="email" id="email" placeholder="panic@thedis.co" suppressHydrationWarning={true} />
                            <label className='text-white text-xl font-bold' htmlFor="message">Subject</label>
                            <input className={[styles.input, 'w-full rounded-xl p-2 my-1 text-black text-lg'].join(' ')} type="text" name="subject" id="subject" placeholder="Help with... Regarding..." />
                            <label className='text-white text-xl font-bold' htmlFor="message">Message</label>
                            <textarea className={[styles.input, 'w-full rounded-xl p-2 my-1 text-black text-lg'].join(' ')} name="message" id="message" placeholder="According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.x" />
                            <SendButton />
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}