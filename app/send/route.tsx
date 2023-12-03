import Email from "@/emails/incoming";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { NextRequest } from 'next/server';

// ---------------------------------------------------------------------------------------------

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
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

        if (!sendto) {
            console.log('Terminating email render: no recipient specified.')
            const html = await axiosGet('https://beta.formaliser.net/norecipient.html');
            return new Response(html, { status: 400 });
        }

        if (!name || !email || !subject || !message) {
            console.log('Terminating email render: empty fields.')
            const html = await axiosGet('https://beta.formaliser.net/emptyfields.html');
            return new Response(html, { status: 400 });
        }

        if (!email.includes('@') || !email.includes('.')) {
            console.log('Terminating email render: invalid sender email.')
            const html = await axiosGet('https://beta.formaliser.net/invalidemail.html');
            return new Response(html, { status: 400 });
        }

        const html = render(<Email name={name} email={email} subject={subject} message={message} />);
        console.log('Email render successful.')
        const plain = `NEW FORMALISER.NET MESSAGE\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nThis message is better viewed on a client that supports HTML emails.`
        console.log('Email plain text render successful.')

        const emailOptions = {
            from: 'FORMALISER.NET Form <incoming@formaliser.net>',
            to: sendto,
            replyTo: `${name} <${email}>`, // this is the only way to get the name to show up in the reply-to field
            subject: `New message from ${name}`,
            html: html,
            text: plain,
        };

        await transporter.sendMail(emailOptions);
        console.log('Email render and delivery successful.')
        const successHtml = await axiosGet('https://beta.formaliser.net/success.html');
        return new Response(successHtml, { status: 200 });
    } catch (error) {
        console.log('Terminating email render: server error.')
        console.error(error);
        const errorHtml = await axiosGet('https://beta.formaliser.net/servererror.html');
        return new Response(errorHtml, { status: 500 });
    }
}


