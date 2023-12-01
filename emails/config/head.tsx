import { Head } from '@react-email/components';

const MailerHead = () => {
    return (
        <Head>
            <title>Webform Submission</title>
            <meta name="description" content="You have received a webform submission." />
            <link rel="icon" href="https://formaliser.net/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
            <link rel="stylesheet" href="https://beta.formaliser.net/failwind.css" />
        </Head>
    )
}

export default MailerHead;