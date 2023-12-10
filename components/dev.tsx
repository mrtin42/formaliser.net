import { headers } from 'next/headers'

export default function DevDisclaimer() {
    const reqHeaders = headers();
    let hostname = reqHeaders.get('host');

    return (
        <>
            {hostname === 'beta.formaliser.net' ? (
                <div className='fixed z-50 flex flex-col items-center justify-center w-full h-1/10 bg-slate-900'>
                    <p className='text-lg text-center text-white-800'>
                        You are currently using the beta version of FORMALISER.NET. Please be aware that this version is not yet stable and may contain bugs. If you find any bugs, please report them to <a className='underline hover:no-underline' href="mailto:info@formaliser.net">info@formaliser.net</a>.
                    </p>
                </div>
            ) : null}
        </>
    )
}