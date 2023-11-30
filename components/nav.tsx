import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Nav.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
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
                <Link className={styles.link} href="/docs">
                    Docs
                </Link>
                <Link className={styles.link} href="/pricing">
                    Pricing
                </Link>
                <Link className={styles.link} href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    )
}