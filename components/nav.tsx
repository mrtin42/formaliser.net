import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '@/styles/Nav.module.css'

export default function Navbar() {
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
        <nav className={styles.nav + ' ' + (isScrolled ?`bg-slate-300/80     shadow-lg text-slate-900` : `bg-transparent text-white `)}>
            <div className={styles.navwrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            className={styles.logoImg}
                            src="/formaliser.svg"
                            alt="FORMALISER.NET"
                            width={500}
                            height={100}
                        />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} href="/get-started">
                        Get Started
                    </Link>
                    <Link className={styles.link} href="/contact">
                        Contact
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}