import React from "react";
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    Title,
    Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
);

const ChartData = ({ data, dataKey }) => {
    let dataKeyCapitalized = dataKey.charAt(0).toUpperCase() + dataKey.slice(1);
    let chartText = dataKeyCapitalized + "";

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: chartText,
            },
        },
    };

    return (
        <Pie
            data={data}
            options={options}
        />
    );
};

export default ChartData;