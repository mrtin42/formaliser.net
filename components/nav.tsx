'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '@/styles/Nav.module.css'
import { Navbar } from './ui';

export default Navbar;

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
    

//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         // Change 10 to your desired scroll position
//         setIsScrolled(scrollPosition > 40);
//       };
      
//       handleScroll();

//       window.addEventListener('scroll', handleScroll);
  
//       // Cleanup
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);

//     return (
//         <div>
//             <nav className={styles.nav + ' ' + (isScrolled ?`bg-slate-300/80     shadow-lg text-slate-900` : `bg-transparent text-white `)}>
//                 <div className={styles.navwrapper}>
//                     <div className={styles.logo}>
//                         <Link href="/">
//                             <Image
//                                 className={styles.logoImg}
//                                 src="/formaliser.svg"
//                                 alt="FORMALISER.NET"
//                                 width={500}
//                                 height={100}
//                             />
//                         </Link>
//                     </div>
//                     <div className={styles.links}>
//                         <Link className={styles.link} href="/#features">
//                             Features
//                         </Link>
//                         <Link className={styles.link} href="/contact">
//                             Contact
//                         </Link>
//                     </div>
//                     {/* lets make a hamburger menu for mobile */}
//                     <div className={styles.hamburger}>
//                         <div className={styles.hamburgerIcon}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-950 active:scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => {
//                                 const element = document.getElementById('hamburger')
//                                 if (element) {
//                                     element.classList.toggle('hidden');
//                                 } else {
//                                     console.error('element is null')
//                                 }
//                             }}>
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         </div>

//                     </div>
//                 </div>
//             </nav>
//             <div className={[styles.hamburgerMenu, 'hidden text-center'].join(' ')} id='hamburger'>
//                 <div className={styles.link}>
//                     <Link href="#features">
//                         Features
//                     </Link>
//                 </div>
//                 <div className={styles.link}>
//                     <Link href="/contact">
//                         Contact
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }