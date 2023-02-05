import React, { useState } from 'react';
import ChartData from '../ChartData/ChartData';
import './ViewData.css';
import { useChartData } from '../../hooks/useChartData';
import SectionLoader from "../SectionLoader/SectionLoader";

const ViewData = ({data, setError}) => {

    const [chartCategory, setChartCategory] = useState(null);
    const [chartPrice, setChartPrice] = useState(null);
    useChartData('category', data, setChartCategory, setError);
    useChartData('price', data, setChartPrice, setError);

    if (
        !chartCategory ||
        !chartPrice
    ) return <SectionLoader />;
    if (chartCategory.length === 0 ||
        chartPrice.length === 0
    ) return <h1>No data</h1>;

    return (
        <div className="ChartBlock">
            <ChartData
                data={chartCategory}
                dataKey='Category'
            />
            <ChartData
                data={chartPrice}
                dataKey='Price'
            />
        </div>
    );
};

export default ViewData;