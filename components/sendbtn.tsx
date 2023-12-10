'use client';

import { ReactNode } from 'react';
import { useState } from 'react';
import { Inter, Poppins, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/Index.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function SendButton() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <button className={[styles.button, 'w-full rounded-xl p-2 mt-2 text-slate-200 bg-slate-700 text-lg transition-all duration-250 hover:bg-slate-600 hover:text-slate-100'].join(' ')} type="submit" onClick={
                () => {
                    setIsClicked(true);
                    setTimeout(() => setIsClicked(false), 2000);
                }
            }>
                {isClicked ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Send'}
            </button>
        </>
    )
}