import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins, Roboto } from "next/font/google";
import styles from "@/styles/Index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className={[styles.footer, 'flex flex-col items-center justify-center w-full h-3/10 bg-slate-900'].join(' ')}>
            <div className='flex flex-col items-center justify-center w-full p-1 pt-5 notgrid'>
                <Image src="/formaliser_dark.svg" width={500} height={100} alt="FORMALISER.NET" />
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
    )
}