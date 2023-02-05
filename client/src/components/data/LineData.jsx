import React from "react";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
const LineData = ({ data, dataKey }) => {
    let dataKeyCapitalized = dataKey.charAt(0).toUpperCase() + dataKey.slice(1);
    let chartText = dataKeyCapitalized + "";

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: chartText,
            },
        },
    };

    return (
        <Line
            data={data}
            options={options}
        />
    )
}

export default LineData;