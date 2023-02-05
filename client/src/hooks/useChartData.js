import { useEffect } from 'react';

export const useChartData = (key, data, setChartData, setError) => {
    useEffect(() => {
        let keysArr = [];
        let valuesArr = [];
        let backgroundColorArr = [];
        let borderColorArr = [];

        function randomBackgroundColor() {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            const a = Math.random();
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        }

        async function fetchChartData() {
            for (const dataObj of data) {
                let count = 0;
                if (!keysArr.includes(dataObj[key])) {
                    keysArr.push(dataObj[key]);
                    const filterWifiNames = data.filter(obj => obj[key] === dataObj[key] && count++);
                    valuesArr.push(filterWifiNames.length + 1);
                    backgroundColorArr.push(randomBackgroundColor());
                    borderColorArr.push('rgb(89,89,89, 1)');
                }
            }
        }

        if (data) {
            fetchChartData()
                .then(() => {
                    setChartData({
                        labels  : keysArr,
                        datasets: [{
                            label          : 'number of scanned data',
                            data           : valuesArr,
                            backgroundColor: backgroundColorArr,
                            borderColor    : borderColorArr,
                            borderWidth    : 1
                        }]
                    });
                })
                .catch(error => {
                    setError(error);
                });
        }

    }, [key, data, setChartData, setError]);
};