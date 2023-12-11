import Email from "@/emails/incoming";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { NextRequest } from 'next/server';
const qs = require('querystring');

// ---------------------------------------------------------------------------------------------

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
        const formData = await req.formData();
        const name: any = formData.get('name');
        const email: any = formData.get('email');
        try {
            var subject: any = formData.get('subject');
        } catch (error) {
            console.log('No subject specified: defaulting to "No subject".')
            var subject: any = 'No subject';
        }
        const message: any = formData.get('message');
        const searchParams = req.nextUrl.searchParams;
        const sendto = searchParams.get('to');

        if (!sendto) {
            console.log('Terminating email render: no recipient specified.')
            const html = await axiosGet('https://formaliser.net/norecipient.html');
            return new Response(html, { status: 400, headers: { 'Content-Type': 'text/html' } });
        }

        if (!name || !email || !subject || !message) {
            console.log('Terminating email render: empty fields.')
            const html = await axiosGet('https://formaliser.net/emptyfields.html');
            return new Response(html, { status: 400, headers: { 'Content-Type': 'text/html' } });
        }

        if (!email.includes('@') || !email.includes('.')) {
            console.log('Terminating email render: invalid sender email.')
            const html = await axiosGet('https://formaliser.net/invalidemail.html');
            return new Response(html, { status: 400, headers: { 'Content-Type': 'text/html' } });
        }
        let additionalFields = '';
        for (const [key, value] of formData.entries()) {
            if (key !== 'name' && key !== 'email' && key !== 'subject' && key !== 'message') {
                additionalFields += `
                    <div style="padding: 5px 0;">
                        <p style="font-size: 16px; font-weight: 400; color: #374151; padding: 0; margin: 0;">${key}: ${value}</p>
                    </div>
                `;
            }
        }
    

        const html = render(<Email name={name} email={email} subject={subject} message={message} extra={additionalFields} />);
        console.log('Email render successful.')
        const plain = render(<Email name={name} email={email} subject={subject} message={message} extra={additionalFields} />, { plainText: true, });
        console.log('Email plain text render successful.')

        const emailOptions = {
            from: 'FORMALISER.NET <incoming@formaliser.net>',
            to: sendto,
            replyTo: `${name} <${email}>`, // this is the only way to get the name to show up in the reply-to field
            subject: `${subject ? subject : 'New Webform Submission'} - FORMALISER.NET`,
            html: html,
            text: plain,
        };

        await transporter.sendMail(emailOptions);
        console.log('Email render and delivery successful.')
        const successHtml = await axiosGet('https://formaliser.net/success.html');
        return new Response(successHtml, { status: 200, headers: { 'Content-Type': 'text/html' } });
    } catch (error) {
        console.log('Terminating email render: server error.')
        console.error(error);
        const errorHtml = await axiosGet('https://formaliser.net/servererror.html');
        return new Response(errorHtml, { status: 500, headers: { 'Content-Type': 'text/html' } });
    }
}


