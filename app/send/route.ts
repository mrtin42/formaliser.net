

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json();
    const { searchParams } = new URL(req.url);
    const sendto = searchParams.get('to');



}

