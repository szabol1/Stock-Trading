import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const Charts = ({ data }) => {
  const chartRef = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    const hValues = data.data.map(item => item.h);
    const ctx = chartRef.current.getContext('2d');

    if (myChart.current) {
      myChart.current.destroy();
      myChart.current = null;
    }

    myChart.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.data.map((_, index) => index),
        datasets: [{
          label: 'S&P 500 (SPY) Stock Price',
          data: hValues,
          borderColor: 'rgba(75, 255, 255, 1)',
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
  }, [data]);

  return (
    <div>
      <canvas 
        width="600"  // Set a fixed width
        height="300" // Set a fixed height
      ref={chartRef} />
    </div>
  );
};

export default Charts;
