'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import nStyle from '@/styles/Nav.module.css';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Change 10 to your desired scroll position
        setIsScrolled(scrollPosition > 40);
      };
      
      handleScroll();

      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div>
            <nav className={nStyle.nav + ' ' + (isScrolled ?`bg-slate-300/80     shadow-lg text-slate-900` : `bg-transparent text-white `)}>
                <div className={nStyle.navwrapper}>
                    <div className={nStyle.logo}>
                        <Link href="/">
                            <Image
                                className={nStyle.logoImg}
                                src="/formaliser.svg"
                                alt="FORMALISER.NET"
                                width={500}
                                height={100}
                            />
                        </Link>
                    </div>
                    <div className={nStyle.links}>
                        <Link className={nStyle.link} href="/#features">
                            Features
                        </Link>
                        <Link className={nStyle.link} href="/contact">
                            Contact
                        </Link>
                        <Link className={nStyle.link} href="/account/dashboard">
                            Dashboard
                        </Link>
                    </div>
                    {/* lets make a hamburger menu for mobile */}
                    <div className={nStyle.hamburger}>
                        <div className={nStyle.hamburgerIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-950 active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => {
                                const element = document.getElementById('hamburger')
                                if (element) {
                                    element.classList.toggle('hidden');
                                } else {
                                    console.error('element is null')
                                }
                            }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>

                    </div>
                </div>
            </nav>
            <div className={[nStyle.hamburgerMenu, 'hidden text-center'].join(' ')} id='hamburger'>
                <div className={nStyle.link}>
                    <Link href="#features">
                        Features
                    </Link>
                </div>
                <div className={nStyle.link}>
                    <Link href="/contact">
                        Contact
                    </Link>
                    <Link href="/account/dashboard">
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Dashnav = () => {
    // literally the same as the navbar but no scroll listener
    return (
        <div>
            <nav className={nStyle.dnav + ' bg-slate-300/80 shadow-lg text-slate-900'}>
                <div className={nStyle.navwrapper}>
                    <div className={nStyle.logo}>
                        <Link href="/">
                            <Image
                                className={nStyle.logoImg}
                                src="/formaliser.svg"
                                alt="FORMALISER.NET"
                                width={500}
                                height={100}
                            />
                        </Link>
                    </div>
                    <div className={nStyle.links}>
                        <Link className={nStyle.link} href="/#features">
                            Features
                        </Link>
                        <Link className={nStyle.link} href="/contact">
                            Contact
                        </Link>
                        <Link className={nStyle.link} href="/account/dashboard">
                            Dashboard
                        </Link>
                    </div>
                    {/* lets make a hamburger menu for mobile */}
                    <div className={nStyle.hamburger}>
                        <div className={nStyle.hamburgerIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-950 active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => {
                                const element = document.getElementById('hamburger')
                                if (element) {
                                    element.classList.toggle('hidden');
                                } else {
                                    console.error('element is null')
                                }
                            }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>

                    </div>
                </div>
            </nav>
            <div className={[nStyle.hamburgerMenu, 'hidden text-center'].join(' ')} id='hamburger'>
                <div className={nStyle.link}>
                    <Link href="#features">
                        Features
                    </Link>
                </div>
                <div className={nStyle.link}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
                <div className={nStyle.link}>
                    <Link href="/account/dashboard">
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Navbar, Dashnav };