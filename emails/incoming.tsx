import { Html, Tailwind } from '@react-email/components'
import MailerHead from './config/head'

const Email = (name: string, email: string, subject: string, message: string) => {
    return (
        <>
            <Html lang="en">
                <MailerHead />
                <Tailwind config={{theme: {extend: {fontFamily: {sans: ['Inter', 'sans-serif']}}}}}>
                    <div className="bg-gray-100">
                        <div className="container mx-auto px-4 font-sans">
                            <header className="py-3 flex justify-center items-center">
                                <div className="flex items-center">
                                    <img className="h-12" src="https://formaliser.net/formaliser.svg" alt="FORMALISER.NET" />
                                </div>
                            </header>
                            <div className="py-4 flex justify-center items-center flex-col">
                                <h1 className="text-2xl font-semibold text-gray-900 py-0 my-0">Webform Submission</h1>
                                <p className="text-gray-700 padding-1 py-0 my-1">You have received a webform submission.</p>
                            </div>
                            <hr className="border-gray-300 px-1" />
                            <div className="py-4 flex justify-center items-center flex-col">
                                <h2 className="text-xl font-semibold text-gray-900 py-0 my-0">From: {name}</h2>
                                <h4 className="text-gray-700 padding-1 py-0 my-1">Subject: {subject}</h4>
                            </div>
                        </div>
                    </div>
                </Tailwind>
            </Html>
        </>
    )
}

export default Email()