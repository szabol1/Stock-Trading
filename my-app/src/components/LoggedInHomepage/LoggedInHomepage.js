import React from 'react';
import ChartComponent from './ChartComponent';
import StockListComponent from './StockListComponent';
import NewsListComponent from './NewsListComponent';

const Homepage = () => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ChartComponent />
                </div>
                <div style={{ flex: 1 }}>
                    <StockListComponent />
                </div>
            </div>
            <div>
                <NewsListComponent />
            </div>
        </div>
    );
};

export default Homepage;