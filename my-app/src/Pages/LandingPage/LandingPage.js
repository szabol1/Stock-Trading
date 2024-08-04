import React, { useEffect, useState } from 'react';
import Charts from '../../components/Chart/Charts';
import StockList from '../../components/StockList/StockList';
import NavBar from '../../components/Nav/NavBar';
import Articles from '../../components/Articles/Articles';
import './LandingPage.css'; // Add custom styles

const LandingPage = () => {
  const [sp500Data, setSp500Data] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch S&P 500 data
    const fetchSp500Data = async () => {
      try {
        const url = 'https://api.finazon.io/latest/time_series?dataset=us_stocks_essential&ticker=SPY&interval=1d';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': 'apikey 5e7a8d5cae3b42359bb4b2abd277ea6ftm'
          }
        });
        const data = await response.json();
        setSp500Data(data);
      } catch (error) {
        console.error('Error fetching S&P 500 data:', error);
      }
    };

    // Fetch articles
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=6db23aa353294deca82b4b95d0cccc82');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchSp500Data();
    fetchArticles();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="landing-page">
        <div className="chart-section">
        <h1>S&P 500</h1>
          {sp500Data && <Charts data={sp500Data} />}
        </div>
        <div className="stock-list-section">
          <StockList />
        </div>
        <div className="articles-section">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
