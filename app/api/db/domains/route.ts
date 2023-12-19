import prisma from "@/lib/db/prisma";
import type { NextRequest } from "next/server";
// import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

export async function GET(
    req: NextRequest
) {
    const email: any = req.nextUrl.searchParams
    const domains = await prisma.userData.findMany({
        select: {
            domains: true
        },
        where: {
            email: email    
        }
    });
    console.log(domains);
    if (!domains[0]) {
        return new Response(JSON.stringify({
            code: 404,
            message: "No domains found"
        }), {
            status: 404
        });
    }
    const domainList = domains[0].domains?.split(", ");
    console.log(domainList)
    return new Response(JSON.stringify({
        code: 200,
        message: "OK",
        domains: domainList
    }), {
        status: 200
    });
}

export async function POST(
    req: NextRequest
) {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    });
    console.log('token acquired: will not print to console to maintain security')
    if (!token || token === null) {
        console.error('no token found: throwing 401')
        console.log(token)
        return new Response(JSON.stringify({
            code: 401,
            message: "Unauthorized",
            error: "No access token accosiated with this request"
        }), {
            status: 401
        });
    }
    const query = await req.json();
    console.log(query);
    const email: any = query.email;
    const newDomain = query.domain;

    const tokenAssociatedEmail = await prisma.account.findMany({
        select: {
            access_token: true
        },
        where: {
            user: {
                email: email
            }
        }
    });
    console.log('database token acquired: will not print to console to maintain security')
    if (tokenAssociatedEmail[0].access_token !== token.accessToken) {
        console.error('token does not match user\'s own token: throwing 401')
        return new Response(JSON.stringify({
            code: 401,
            message: "Unauthorized",
            information: "The access token provided is not permitted to access this user's resources or is invalid"
        }), {
            status: 401
        });
    }
    console.log('token matches user\'s own token: continuing')
    const domains = await prisma.userData.findMany({
        select: {
            domains: true
        },
        where: {
            email: email
        }
    });
    console.log(`user\'s added domains acquired: ${domains}`)
    if (!domains[0]) {
        console.log('user\'s domains not found: creating new entry')
        await prisma.userData.create({
            data: {
                email: email,
                domains: `${newDomain}, `
            }
        });
        console.log('new entry created and response sent - good day!')
        return new Response(JSON.stringify({
            code: 200,
            message: "OK",
            information: "The domain has been added to the user's account",
            domains: newDomain
        }), {
            status: 200
        });
    } else if (domains[0]) {
        console.log('user\'s domains found: updating entry')
        const existingDomains = domains[0].domains;
        const newDomains = existingDomains + `${newDomain}, `;
        console.log(`
        existing domains: ${existingDomains}\n
        new domains: ${newDomains}
        `)
        try {
            console.log('attempting to update entry')
            await prisma.userData.update({
                where: {
                    email: email
                },
                data: {
                    domains: newDomains
                }
            });
            console.log('entry updated and response sent - good day!')
            return new Response(JSON.stringify({
                code: 201,
                message: "Created",
                information: "The domain has been added to the user's account",
                domains: newDomains
            }), {
                status: 200
            });
        } catch (err) {
            console.error('error updating entry: throwing 500')
            return new Response(JSON.stringify({
                code: 500,
                message: "Internal Server Error",
                error: err
            }), {
                status: 500
            });
        }
    }

}