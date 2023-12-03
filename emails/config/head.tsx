import { Head } from '@react-email/components';

const MailerHead = ({ children }: { children: React.ReactNode }) => {
    return (
        <Head>
            <link rel="icon" href="https://formaliser.net/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
            {/* <link rel="stylesheet" href="https://beta.formaliser.net/failwind.css" /> */}
            {children}
        </Head>
    )
}

export default MailerHead;