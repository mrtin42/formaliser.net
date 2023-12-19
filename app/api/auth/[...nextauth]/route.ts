import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth/authOptions'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };