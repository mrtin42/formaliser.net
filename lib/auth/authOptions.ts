import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextAuthOptions } from 'next-auth';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
        server: {
            host: SMTP_HOST,
            port: SMTP_PORT,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        },
        from: SMTP_FROM
        })
    ],
    callbacks: {
        jwt: async ({ token, user, account }) => {
            if (account && account.access_token) {
                token.accessToken = account.access_token // <-- adding the access_token here
            }
            return token
        },
    },
    secret: process.env.NEXTAUTH_SECRET
}

export { authOptions };