import { Html, Img } from '@react-email/components'
import MailerHead from '@/emails/config/head'

interface EmailProps {
    name: string
    email: string
    subject?: string
    message: string
}

export default function Email({ name, email, subject, message }: EmailProps) {
    return (
        <>
            {/* <Html lang="en"> */}
                {/* <MailerHead>
                    <title>Webform Submission</title>
                    <meta name="description" content="You have received a webform submission." />
                    <style>
                        {`
                            @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
                            body { font-family: 'Inter', sans-serif; }
                        `} 
                    </style>
                </MailerHead> */}
                {/* <body style={{ fontFamily: 'Inter, sans-serif' }}> */}
                    <div style={{ backgroundColor: '#F3F4F6', borderRadius: '0.5rem' }}>
                        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                            <header style={{ padding: '5px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Img src="https://formaliser.net/formaliser.svg" alt="FORMALISER.NET" width={250} height={80} />
                                </div>
                            </header>
                            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', padding: 0, margin: 0 }}>Webform Submission</h1>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>You have received a webform submission.</p>
                            </div>
                            <hr style={{ border: '1px solid #E5E7EB', width: '100%' }} />
                            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', padding: 0, margin: 0 }}>Subject: {subject}</h2>
                                <h4 style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>From: {name} ({email})</h4>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>* * *</p>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>{message}</p>
                            </div>
                            <hr style={{ border: '1px solid #E5E7EB', width: '100%' }} />
                            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '5px 0' }}>Hit reply to respond to this message. The sender address will be automatically filled in by your email client.</p>
                            </div>
                            <footer style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontStyle: 'italic' }}>
                                <p style={{ fontSize: '12px', fontWeight: 400, color: '#374151', padding: 0, margin: '1px 0' }}>HTML webforms powered by <a style={{ color: '#3B82F6', textDecoration: 'none' }} href="https://formaliser.net">FORMALISER.NET</a></p>
                                <p style={{ fontSize: '12px', fontWeight: 400, color: '#374151', padding: 0, margin: '1px 0' }}>To unsubscribe from these emails, remove our URL from your webform action attribute.</p>
                            </footer>
                        </div>
                    </div>
                {/* </body> */}
            {/* </Html> */}
        </>
    )         
}