type Revenue = {
    month: string;
    revenue: number;
};

export default async function RevenueChart({
    revenue,
}: {
    revenue: Revenue[];
}) {
    if (!revenue || revenue.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
    }

    const chartHeight = 350;
    const yAxisLabels = ['$0K'];
    const topLabel = Math.max(...revenue.map((m) => m.revenue));

    return (
        <div className="w-full md:col-span-4">
            <h2 className="mb-4 text-xl md:text-2xl">Recent Revenue</h2>
            <div className="rounded-xl bg-gray-50 p-4">
                <div
                    className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4"
                    style={{ minHeight: `${chartHeight}px` }}
                >
                    {revenue.map((month) => (
                        <div key={month.month} className="flex flex-col items-center gap-2">
                            <div
                                className="w-full rounded-md bg-blue-300"
                                style={{
                                    height: `${(chartHeight * 0.8 * month.revenue) / (topLabel || 1)}px`,
                                }}
                            ></div>
                            <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                                {month.month}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
                </div>
            </div>
        </div>
    );
}