import { faker } from "@faker-js/faker";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

import React from "react";

import Card from "@src/components/Card";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: "top" as const,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: "rgb(132, 99, 255)",
            backgroundColor: "rgba(132, 99, 255, 0.2)",
            tension: 0.2,
            fill: true,
            pointRadius: 0
        }
    ],
};

const StatCard = () => {
    return (
        <Card>
            <div className="-mx-8 -my-6 relative overflow-hidden">
                <div className="px-3 py-10 text-center relative z-10">
                    <h4 className="text-sm text-gray-500 leading-tight">
                        Views
                    </h4>
                    <h3 className="text-3xl text-gray-700 font-black leading-tight mb-2">
                        8,028
                    </h3>
                    <p className="text-sm text-green-500 leading-tight">
                        ▲ 8.2%
                    </p>
                </div>
                <div className="absolute top-10 bottom-0 inset-x-0 opacity-50 -m-2">
                    <Line options={options} data={data} />
                </div>
            </div>
        </Card>
    );
};

export default StatCard;
