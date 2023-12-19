import Head from "next/head";
import Image from "next/image";
import { Dashnav as Navbar } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
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
            <h1 className="text-4xl text-white font-medium">Sit tight...</h1>
            <p className="text-xl text-white">We're loading your dashboard.</p>
            <FontAwesomeIcon
               icon={faCircleNotch}
               className="animate-spin text-6xl text-white mt-5"
            />
         </div>
      </>    
   );
}

export default Loading;