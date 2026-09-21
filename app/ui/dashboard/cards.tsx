type CardProps = {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
};

export function Card({ title, value, type }: CardProps) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
                {value}
            </p>
        </div>
    );
}