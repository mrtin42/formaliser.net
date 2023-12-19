import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Dashnav as Navbar } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Unauthenticated = () => {
   return (
      <>
         <Head>
            <title>Dashboard // FORMALISER.NET</title>
         </Head>
         <Navbar />
         <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
               src="/formaliser.svg"
               alt="Formaliser Logo"
               width={400}
               height={400}
            />
            <h1 className="text-4xl text-white font-medium">You're not logged in.</h1>
            <p className="text-xl text-white">Please login to view your dashboard.</p>
            <Link href="/api/auth/signin" className="text-xl text-white underline hover:no-underline">
               Login
            </Link>
         </div>
      </>
   );
}

export default Unauthenticated;