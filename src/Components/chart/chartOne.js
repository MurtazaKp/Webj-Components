import React from 'react'

import ReactApexChart from 'react-apexcharts'

const chartData = {
    heading: 'Sales Report',
    exportChart: {
        label: 'Export to csv',
    },
    month: ['12 Month', '6 Month', '3 Month', '7 Days'],
    seriesData: [
        {
            name: 'New user',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
        },
        {
            name: 'Returning user',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
        },
    ],
    catagories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
}

const SalesReport = ({
    heading,
    exportChart,
    catagories,
    seriesData,
    month,
}) => {
    const chart4Options = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        series: seriesData,
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            colors: undefined,
            width: 2,
        },
        grid: {
            row: {
                opacity: 0,
            },
        },
        xaxis: {
            categories: catagories,
        },
        yaxis: {
            show: false,
        },
        fill: {
            type: 'solid',
            opacity: [0.05, 0],
        },
        colors: ['#4F46E5', '#818CF8'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                        <div className="px-4 pt-5 sm:px-6">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-base font-bold text-gray-900 lg:order-1">
                                    {heading}
                                </p>

                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm lg:order-2 2xl:order-3 md:order-last hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    <svg
                                        className="w-4 h-4 mr-1 -ml-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    {exportChart.label}
                                </button>

                                <nav className="flex items-center justify-center  space-x-1 2xl:order-2 lg:order-3 md:mt-0 mt-4 sm:space-x-2 2xl:mt-0">
                                    {month.map((month, index) => {
                                        return (
                                            <a
                                                href="#"
                                                title=""
                                                key={index}
                                                className="px-2 py-2 text-xs font-bold text-gray-900 transition-all border border-gray-900 rounded-lg sm:px-4 hover:bg-gray-100 dration-200"
                                            >
                                                {month}
                                            </a>
                                        )
                                    })}
                                </nav>
                            </div>

                            <div id="chart4" className="mt-6">
                                <ReactApexChart
                                    options={chart4Options}
                                    series={chart4Options.series}
                                    type={chart4Options.chart.type}
                                    height={chart4Options.chart.height}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesReport
