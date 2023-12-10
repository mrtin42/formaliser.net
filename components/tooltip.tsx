'use client';

import { ReactNode } from 'react';
import { useState } from 'react';
import { Inter, Poppins, Roboto } from 'next/font/google';
import styles from '@/styles/Tooltip.module.css';

const inter = Inter({ subsets: ['latin'] });

const Tooltip = ({
    children,
    text,
}: {
    children: React.ReactNode;
    text: string;
}) => {
    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className={styles.tooltip}>
            <button className="text-xs md:text-lg text-center text-white-800 md:p-2 bg-gray-700 rounded-lg md:rounded-xl" onClick={() => { navigator.clipboard.writeText('https://formaliser.net/send?to=your@emailaddress.com'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000); }}>
                {children}
            </button>
            <span className={styles.tooltiptext}>
                {isCopied ? 'Copied!' : text}
            </span>
        </div>
    )
}

export default Tooltip;