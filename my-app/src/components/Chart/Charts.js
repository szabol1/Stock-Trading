import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const api = '5e7a8d5cae3b42359bb4b2abd277ea6ftm'
//time interval set depending on button chosen- button will be event listener and change state of interval

const Charts = () => {
    const [stockData, setStockData] = useState(null);
    const chartRef = useRef(null);
    const myChart = useRef(null);

    const historical = async () => {
        try {
            const url = 'https://api.finazon.io/latest/time_series?dataset=us_stocks_essential&ticker=AAPL&interval=1d';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'apikey 5e7a8d5cae3b42359bb4b2abd277ea6ftm'
                }
            });
            const data = await response.json();
            setStockData(data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        historical(); // Fetch the data when the component mounts
    }, []);
    console.log(stockData)


    useEffect(() => {
        if (stockData) {
            const hValues = stockData.data.map(item => item.h);
            const ctx = chartRef.current.getContext('2d');

            if (myChart.current) {
                myChart.current.destroy();
                myChart.current = null;
            }

            myChart.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: stockData.data.map((_, index) => index), // replace this with actual labels if available
                    datasets: [{
                        label: 'Apple Inc. (AAPL) Stock Price',
                        data: hValues,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true
                            }
                        }
                    }
                }
            });
        }
    }, [stockData]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default Charts;