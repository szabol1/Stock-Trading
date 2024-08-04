import react from 'react';
import React, { useEffect, useState } from 'react';
import stockList from './stockList.css';

function getUnixTimestamp(year, month, day) {//get halfway point of days unixtime stamp to be used to get stock info
    let date;
    if(year && month && day) {
        date = new Date(year, month - 1, day); // JavaScript counts months from 0
    } else {
        date = new Date(); // Use current date if no specific date is provided
    }
    date.setHours(13, 30, 0, 0); // Set the time to 1:30 PM
    return date.getTime() / 1000; // Convert to Unix timestamp
}
 
const StockList = () => {
    const [stockPrices, setStockPrices] = useState([]);

    useEffect(() => {
        const stocks = [
            "APPL",
            "GOOG",
            "TSLA",
            "AMZN",
            "JPM",
            "MSFT",
            "NFLX",
            "DIS",
            "NVDA",
            "META"
        ];

        const fetchPromises = stocks.map(stock => {
            return fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=cnjlqrpr01qmfbtbf590cnjlqrpr01qmfbtbf59g`)
                .then(response => response.json())
                .then(data => ({ stock, price: data.c }));
        });

        Promise.all(fetchPromises)
            .then(setStockPrices)
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div style = {{width: '300px',backgroundColor: 'black', height: '500px'}}>
            <h1 style= {{color: 'white', padding: '0px', fontSize: '30px'}}>Popular Stock Picks</h1>
            <ul style = {{display: 'block'}}>
                {stockPrices.map(({ stock, price }) => (
                    <li key={stock} style = {{display: 'block', marginBottom: '1em', color: 'white'}}><span style={{display: 'inline-block', textAlign:'center', backgroundColor: 'red', width: '80px', height: '50px', lineHeight: '50px', marginRight: '20px' }}> {price.toFixed(2)} </span>{stock} </li>
                ))}
            </ul>
        </div>
    );
};

export default StockList;