import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Loading from './loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Domains from '@/components/dashboard/domains';
import { Dashnav as Navbar } from '@/components/ui';
import Unauthenticated from './nosession';
import { useSession } from 'next-auth/react';
import styles from '@/styles/Dash.module.css';
import '@/styles/globals.css';

