import React, { useState } from "react";
import PieData from "../../data/PieData";
import { useChartData } from "../../../hooks/useChartData";
import SectionLoader from "../../loader/SectionLoader/SectionLoader";
import LineData from "../../data/LineData";

const MainPage = ({ data, setError }) => {


    const priceRanges = [
        {range: [0, 49999], label: "0 - 49999 ₸"},
        {range: [50000, 99999], label: "50000 - 99999 ₸"},
        {range: [100000, 149999], label: "100000 - 149999 ₸"},
        {range: [150000, 199999], label: "150000 - 199999 ₸"},
        {range: [200000, 249999], label: "200000 - 249999 ₸"},
        {range: [250000, 299999], label: "250000 - 299999 ₸"},
        {range: [300000, 349999], label: "300000 - 349999 ₸"},
        {range: [350000, 399999], label: "350000 - 399999 ₸"},
        {range: [400000, 449999], label: "400000 - 449999 ₸"},
        {range: [450000, 499999], label: "450000 - 499999 ₸"},
        {range: [500000, 549999], label: "500000 - 549999 ₸"},
        {range: [550000, 599999], label: "550000 - 599999 ₸"},
        {range: [600000, 649999], label: "600000 - 649999 ₸"},
        {range: [650000, 699999], label: "650000 - 699999 ₸"},
        {range: [700000, 749999], label: "700000 - 749999 ₸"},
        {range: [750000, 799999], label: "750000 - 799999 ₸"},
        {range: [800000, 849999], label: "800000 - 849999 ₸"},
        {range: [850000, 899999], label: "850000 - 899999 ₸"},
        {range: [900000, 949999], label: "900000 - 949999 ₸"},
        {range: [950000, 1000000], label: "950000 - 1000000 ₸"},
    ];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        for (let j = 0; j < priceRanges.length; j++) {
            const [min, max] = priceRanges[j].range;
            if (item.price >= min && item.price <= max) {
                item.priceLevel = priceRanges[j].label;
                break;
            }
        }
    }
    const [chartCategory, setChartCategory] = useState(null);
    useChartData("category", data, setChartCategory, setError);

    const [chartPrice, setChartPrice] = useState(null);
    useChartData("priceLevel", data, setChartPrice, setError);

    if (
        !chartCategory ||
        !chartPrice
    ) return <SectionLoader />;
    if (chartCategory.length === 0 ||
        chartPrice.length === 0
    ) return <h1>No data</h1>;

    return (
        <>
            <PieData
                data={chartCategory}
                dataKey="Category"
            />
            <LineData
                data={chartPrice}
                dataKey="priceLevel"
            />
        </>
    );
};

export default MainPage;