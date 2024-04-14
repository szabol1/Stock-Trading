import React from 'react';
import ChartComponent from './ChartComponent';
import StockListComponent from './StockListComponent';
import NewsListComponent from './NewsListComponent';

const Homepage = () => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Chart />
                </div>
                <div style={{ flex: 1 }}>
                    <StockList />
                </div>
            </div>
            <div>
                <NewsListComponent />
            </div>
        </div>
    );
};

export default Homepage;