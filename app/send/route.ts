import Email from "@/emails/incoming";
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();
    const { searchParams } = new URL(req.url);
    const sendto = searchParams.get('to');

    if (sendto === null) {
        // send norecipient.html
        const filepath = path.join(process.cwd(), 'emails', 'config', 'html', 'norecipient.html');
        const html = fs.readFileSync(filepath, 'utf8');
        return new Response(html, { status: 500 });
    }

    if (!name || !email || !subject || !message) {
        // send missingfields.html
        const filepath = path.join(process.cwd(), 'emails', 'config', 'html', 'emptyfields.html');
        const html = fs.readFileSync(filepath, 'utf8');
        return new Response(html, { status: 500 });
    }

    if (!email.includes('@') || !email.includes('.')) {
        // send invalidemail.html
        const filepath = path.join(process.cwd(), 'emails', 'config', 'html', 'invalidemail.html');
        const html = fs.readFileSync(filepath, 'utf8');
        return new Response(html, { status: 500 });
    }

    const html = render(Email({ name, email, subject, message }), { pretty: true });
    const plain = render(Email({ name, email, subject, message }), { plainText: true });

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });
    const emailOptions = {
        from: 'incoming@formaliser.net',
        to: sendto,
        replyTo: email,
        subject: `New message from ${name}`,
        html: html,
        text: plain,
    }

    await transporter.sendMail(emailOptions, (err, info) => {
        if (err) {
            console.log(err);
            const filepath = path.join(process.cwd(), 'emails', 'config', 'html', 'servererror.html');
            const html = fs.readFileSync(filepath, 'utf8');
            return new Response(html, { status: 500 });
        }
        console.log(info);
        const filepath = path.join(process.cwd(), 'emails', 'config', 'html', 'success.html');
        const html = fs.readFileSync(filepath, 'utf8');
        return new Response(html, { status: 200 });
    });
}

