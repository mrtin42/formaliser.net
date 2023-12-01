import { Html, Tailwind } from '@react-email/components'
import MailerHead from './config/head'

export default function Email({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) {
    return (
        <>
            <Html lang="en">
                <MailerHead />
                {/* <Tailwind config={{theme: {extend: {fontFamily: {sans: ['Inter', 'sans-serif']}}}}}> */}
                    <div className="bg-gray-100">
                        <div className="container mx-auto px-4 font-sans w-10/12">
                            <header className="py-3 flex justify-center items-center">
                                <div className="flex items-center">
                                    <img className="h-12" src="https://formaliser.net/formaliser.svg" alt="FORMALISER.NET" />
                                </div>
                            </header>
                            <div className="py-4 flex justify-center items-center flex-col">
                                <h1 className="text-2xl font-semibold text-gray-900 py-0 my-0">Webform Submission</h1>
                                <p className="text-gray-700 padding-1 py-0 my-1">You have received a webform submission.</p>
                            </div>
                            <hr className="border-gray-300  w-10/12" />
                            <div className="py-4 flex justify-center items-center flex-col">
                                <h2 className="text-xl font-semibold text-gray-900 py-0 my-0">From: {name} ({email})</h2>
                                <h4 className="text-gray-700 padding-1 py-0 my-1">Subject: {subject}</h4>
                                <p className="text-gray-700 text-center py-0 my-1 px-2">* * *</p>
                                <p className="text-gray-700 padding-1 py-0 my-1">{message}</p>
                            </div>
                            <hr className="border-gray-300  w-10/12" />
                            <div className="py-4 flex justify-center items-center flex-col">
                                <p className="text-gray-700 padding-1 py-0 my-1">Hit reply to respond to this message. The sender address will be automatically filled in by your email client.</p>
                            </div>
                            <footer className="py-3 flex flex-col justify-center items-center">
                                <p className="text-gray-700 padding-1 py-0 my-1 text-xs italic">HTML webforms powered by <a className="text-blue-500 no-underline" href="https://formaliser.net">FORMALISER.NET</a></p>
                                <p className="text-gray-700 padding-1 py-0 my-1 text-xs italic">To unsubscribe from these emails, remove our URL from your webform action attribute.</p>
                            </footer>
                        </div>
                    </div>
                {/* </Tailwind> */}
            </Html>
        </>
    )
}