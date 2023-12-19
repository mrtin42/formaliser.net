import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Domains = ({ uemail }: { uemail: any }) => {
    const [domains, setDomains] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDomains = async () => {
            try {
                const res = await axios.get('/api/db/domains/', {
                    params: {
                        email: uemail
                    }
                });
                setDomains(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setDomains([]);
                setLoading(false);
            }
        }

        fetchDomains();
    });

    return (
        <>
            {loading ? (
                <FontAwesomeIcon
                    icon={faCircleNotch}
                    className="animate-spin text-6xl text-white mt-5"
                />
            ) : (
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {domains[0] ? (
                        <div className="p-2 m-2 flex flex-col items-center justify-center">
                            <h4 className="text-3xl font-medium">
                                Your domains
                            </h4>
                            {domains.map((domain: any) => (
                                <div className="p-2 m-2" key={domain.id}>
                                    <Link href={`${domain}`} className="text-2xl font-medium text-slate-900 hover:no-underline">
                                        {domain}
                                    </Link>
                                    <Link href={`/account/dashboard/remove-domain?domain=${domain}`} className="text-2xl font-medium text-slate-900 hover:no-underline">
                                        Remove domain
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-2 m-2 flex flex-col items-center justify-center">
                            <h4 className="text-3xl font-medium">
                                Your domains
                            </h4>
                            <p className="text-2xl font-medium">
                                You haven't authenticated any domains yet.
                            </p>
                        </div>
                    )}
                </div>
            )}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <div className="p-2 m-2 flex flex-col items-center justify-center">
                    <Link href="/account/dashboard/add-domain" className="text-2xl font-medium text-slate-900 hover:no-underline">
                        Add a domain
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Domains;