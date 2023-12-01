// import Email from "@/emails/incoming";
// import { render } from '@react-email/render';
// import nodemailer from 'nodemailer';
// import axios from 'axios';
// export const dynamic = 'force-dynamic';

// // export const runtime = "edge";
// // you know what, screw that ^ - it's just fucking nodemailer over. lets see if plain text rendering is the issue

// export async function POST(req: Request) {
//     const { name, email, subject, message } = await req.json();
//     const { searchParams } = new URL(req.url);
//     const sendto = searchParams.get('to');

//     if (sendto === null) {
//         // send norecipient.html
//         const html: string = await axios.get('https://formaliser.net/emptyfields.html');
//         return new Response(html, { status: 500 });
//     }

//     if (!name || !email || !subject || !message) {
//         // send missingfields.html
//         const html: string = await axios.get('https://formaliser.net/emptyfields.html');
//         return new Response(html, { status: 500 });
//     }

//     if (!email.includes('@') || !email.includes('.')) {
//         // send invalidemail.html
//         const html: string = await axios.get('https://beta.formaliser.net/invalidemail.html');
//         return new Response(html, { status: 500 });
//     }

//     const html = render(<Email name={name} email={email} subject={subject} message={message} />);
//     const plain = `NEW FORMALISER.NET MESSAGE\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nThis message is better viewed on a client that supports HTML emails.`

//     const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         }
//     });
//     const emailOptions = {
//         from: 'incoming@formaliser.net',
//         to: sendto,
//         replyTo: email,
//         subject: `New message from ${name}`,
//         html: html,
//         text: plain,
//     }

//     await transporter.sendMail(emailOptions, async (err, info) => {
//         if (err) {
//             console.log(err);
//             const html: string = await axios.get('https://beta.formaliser.net/servererror.html');
//             return new Response(html, { status: 500 });
//         }
//         console.log(err);
//         console.log(info);
//         const html: string = await axios.get('https://beta.formaliser.net/success.html');
//         return new Response(html, { status: 200 });
//     });
// }

// lets try this again

import Email from "@/emails/incoming";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import axios from 'axios';
import util from 'util';
import { NextRequest } from 'next/server';

// prerender the email with ${name} ${email} ${subject} ${message} as placeholders
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

const axiosGet = async (url: string) => {
    const { data } = await axios.get(url);
    return data;
};

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();
        const searchParams = req.nextUrl.searchParams;
        const sendto = searchParams.get('to');

        if (sendto === null || !name || !email || !subject || !message) {
            const html = await axiosGet('https://formaliser.net/emptyfields.html');
            return new Response(html, { status: 500 });
        }

        if (!email.includes('@') || !email.includes('.')) {
            const html = await axiosGet('https://beta.formaliser.net/invalidemail.html');
            return new Response(html, { status: 500 });
        }

        const html = render(<Email name={name} email={email} subject={subject} message={message} />);
        const plain = `NEW FORMALISER.NET MESSAGE\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nThis message is better viewed on a client that supports HTML emails.`

        const emailOptions = {
            from: 'incoming@formaliser.net',
            to: sendto,
            replyTo: email,
            subject: `New message from ${name}`,
            html: html,
            text: plain,
        };

        await transporter.sendMail(emailOptions);
        const successHtml = await axiosGet('https://beta.formaliser.net/success.html');
        return new Response(successHtml, { status: 200 });
    } catch (error) {
        console.error(error);
        const errorHtml = await axiosGet('https://beta.formaliser.net/servererror.html');
        return new Response(errorHtml, { status: 500 });
    }
}


