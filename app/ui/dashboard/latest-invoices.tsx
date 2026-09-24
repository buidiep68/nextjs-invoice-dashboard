import { fetchLatestInvoices } from '@/app/lib/data';
import Image from 'next/image';
type LatestInvoice = {
    id: string;
    name: string;
    email: string;
    image_url: string;
    amount: string;
};

export default async function LatestInvoices(
    // {
    // latestInvoices,
    // }: {
    // latestInvoices: LatestInvoice[];
    // }
) {
    const latestInvoices = await fetchLatestInvoices();
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className="mb-4 text-xl md:text-2xl">Latest Invoices</h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                    {latestInvoices?.map((invoice, i) => (
                        <div
                            key={invoice.id}
                            className={`flex flex-row items-center justify-between py-4 ${i !== latestInvoices.length - 1 ? 'border-b' : ''
                                }`}
                        >
                            <div className="flex items-center">
                                <Image
                                    src={invoice.image_url}
                                    alt={`${invoice.name}'s profile picture`}
                                    className="mr-4 h-8 w-8 rounded-full"
                                    width={32}
                                    height={32}
                                />
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold md:text-base">
                                        {invoice.name}
                                    </p>
                                    <p className="hidden text-sm text-gray-500 sm:block">
                                        {invoice.email}
                                    </p>
                                </div>
                            </div>
                            <p className="truncate text-sm font-medium md:text-base">
                                {invoice.amount}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
                </div>
            </div>
        </div>
    );
}