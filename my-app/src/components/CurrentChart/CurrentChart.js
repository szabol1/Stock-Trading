import React, { useEffect, useState,useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const api = '5e7a8d5cae3b42359bb4b2abd277ea6ftm'

const CurrentChart = () => {
    const [stockData, setStockData] = useState(null);
    const chartRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const historical = async () => {
        try {
            const url = 'https://api.finazon.io/latest/time_series?dataset=sip_non_pro&ticker=AAPL&interval=30m';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'apikey 5e7a8d5cae3b42359bb4b2abd277ea6ftm'
                }
            });
            const data = await response.json();
            setStockData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };
    useEffect(() => {
        historical(); // Fetch the data when the component mounts
    }, []);

    useEffect(() => {
        // Set up a timer to update the current index every second
        const timer = setInterval(() => {
            setCurrentIndex((currentIndex) => currentIndex + 1);
        }, 300000);

        // Clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (stockData.length > 0 && currentIndex < stockData.length) {
            const ctx = document.getElementById('dailyChart').getContext('30m');
    
            // Parse the data
            const labels = [];
            const highData = [];
            for (const data of stockData.slice(0, currentIndex + 1)) {
                const date = new Date(data.t * 300000); // Convert Unix timestamp to JavaScript Date
                labels.push(date);
                highData.push(data.h);
            }
    
            if (chartRef.current) {
                chartRef.current.destroy(); // Destroy the old chart
            }
    
            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'High',
                            data: highData,
                            borderColor: 'rgb(192, 75, 75)',
                            fill: false
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            // ...
                        }
                    }
                }
            });
        }
    }, [stockData, currentIndex]);

    return <canvas id="dailyChart"></canvas>;
};

export default CurrentChart;