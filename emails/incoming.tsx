import { Html, Img } from '@react-email/components'
import MailerHead from './config/head'

interface EmailProps {
    name: string
    email: string
    subject?: string
    message: string
    origin: string
    extra?: string
}

export default function Email({ name, email, subject, message, origin, extra }: EmailProps) {
    return (
        <>
            <Html lang="en">
                <MailerHead>
                    <title>Webform Submission</title>
                    <meta name="description" content="You have received a webform submission." />
                    <style>
                        {`
                            @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
                            body { font-family: 'Inter', sans-serif; }
                        `} 
                    </style>
                </MailerHead>
                <body style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div style={{ backgroundColor: '#F3F4F6' }}>
                        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                            <header style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Img src="https://formaliser.net/formaliser.png" alt="FORMALISER.NET" width={150} height={40} />
                                </div>
                            </header>
                            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', padding: 0, margin: 0 }}>Webform Submission</h1>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>You have received a webform submission.</p>
                            </div>
                            <hr style={{ border: '1px solid #E5E7EB', width: '100%' }} />
                            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', padding: 0, margin: 0 }}>Subject: {subject}</h2>
                                <h4 style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>From: {name} ({email})</h4>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0' }}>* * *</p>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '10px 0', wordWrap: 'break-word' }}>{message}</p>
                            </div>
                            {extra ? (
                                <>
                                    <hr style={{ border: '1px solid #E5E7EB', width: '100%' }} />
                                    <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827', padding: 0, margin: 0 }}>Additional Fields</h3>
                                        <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} dangerouslySetInnerHTML={{ __html: extra }} />
                                    </div>
                                </>
                            ) : null}
                            <hr style={{ border: '1px solid #E5E7EB', width: '100%' }} />
                            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <p style={{ fontSize: '16px', fontWeight: 400, color: '#374151', padding: 0, margin: '5px 0' }}>Hit reply to respond to this message. The sender address will be automatically filled in by your email client.</p>
                            </div>
                            <footer style={{ padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontStyle: 'italic' }}>
                                <p style={{ fontSize: '12px', fontWeight: 400, color: '#374151', padding: 0, margin: '1px 0' }}>{origin}</p>
                                <p style={{ fontSize: '12px', fontWeight: 400, color: '#374151', padding: 0, margin: '1px 0' }}>HTML webforms powered by <a style={{ color: '#3B82F6', textDecoration: 'none' }} href="https://formaliser.net">FORMALISER.NET</a></p>
                                <p style={{ fontSize: '12px', fontWeight: 400, color: '#374151', padding: 0, margin: '1px 0' }}>To unsubscribe from these emails, remove our URL from your webform action attribute.</p>
                            </footer>
                        </div>
                    </div>
                </body>
            </Html>
        </>
    )         
}

// export default function Email({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) {
//     return (
//         <>
//             <Html lang="en">
//                 <MailerHead />
//                 <Tailwind config={{theme: {extend: {fontFamily: {sans: ['Inter', 'sans-serif']}}}}}>
//                     <div className="bg-gray-100">
//                         <div className="container mx-auto px-4 font-sans w-10/12">
//                             <header className="py-3 flex justify-center items-center">
//                                 <div className="flex items-center">
//                                     <img className="h-12" src="https://formaliser.net/formaliser.svg" alt="FORMALISER.NET" />
//                                 </div>
//                             </header>
//                             <div className="py-4 flex justify-center items-center flex-col">
//                                 <h1 className="text-2xl font-semibold text-gray-900 py-0 my-0">Webform Submission</h1>
//                                 <p className="text-gray-700 padding-1 py-0 my-1">You have received a webform submission.</p>
//                             </div>
//                             <hr className="border-gray-300  w-10/12" />
//                             <div className="py-4 flex justify-center items-center flex-col">
//                                 <h2 className="text-xl font-semibold text-gray-900 py-0 my-0">From: {name} ({email})</h2>
//                                 <h4 className="text-gray-700 padding-1 py-0 my-1">Subject: {subject}</h4>
//                                 <p className="text-gray-700 text-center py-0 my-1 px-2">* * *</p>
//                                 <p className="text-gray-700 padding-1 py-0 my-1">{message}</p>
//                             </div>
//                             <hr className="border-gray-300  w-10/12" />
//                             <div className="py-4 flex justify-center items-center flex-col">
//                                 <p className="text-gray-700 padding-1 py-0 my-1">Hit reply to respond to this message. The sender address will be automatically filled in by your email client.</p>
//                             </div>
//                             <footer className="py-3 flex flex-col justify-center items-center">
//                                 <p className="text-gray-700 padding-1 py-0 my-1 text-xs italic">HTML webforms powered by <a className="text-blue-500 no-underline" href="https://formaliser.net">FORMALISER.NET</a></p>
//                                 <p className="text-gray-700 padding-1 py-0 my-1 text-xs italic">To unsubscribe from these emails, remove our URL from your webform action attribute.</p>
//                             </footer>
//                         </div>
//                     </div>
//                 </Tailwind>
//             </Html>
//         </>
//     )
// }

// tailwind sucks with react-email