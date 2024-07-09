import React, { useEffect, useState } from 'react';

const LoggedOutHomePage = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [popularStocks, setPopularStocks] = useState([]);
    const [activeStocks, setActiveStocks] = useState([]);

    useEffect(() => {
        // Fetch news articles from API
        const fetchNewsArticles = async () => {
            try {
                const response = await fetch('API_URL/news');
                const data = await response.json();
                setNewsArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        // Fetch popular stocks from API
        const fetchPopularStocks = async () => {
            try {
                const response = await fetch('API_URL/popular-stocks');
                const data = await response.json();
                setPopularStocks(data.stocks);
            } catch (error) {
                console.error('Error fetching popular stocks:', error);
            }
        };

        // Fetch active stocks from API
        const fetchActiveStocks = async () => {
            try {
                const response = await fetch('API_URL/active-stocks');
                const data = await response.json();
                setActiveStocks(data.stocks);
            } catch (error) {
                console.error('Error fetching active stocks:', error);
            }
        };

        fetchNewsArticles();
        fetchPopularStocks();
        fetchActiveStocks();
    }, []);

    return (
        <div>
            <section>
                <h2>News Articles</h2>
                <div>
                    {newsArticles.map((article) => (
                        <div key={article.id}>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Popular Stocks</h2>
                <ul>
                    {popularStocks.map((stock) => (
                        <li key={stock.id}>{stock.name}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Active Stocks</h2>
                <ul>
                    {activeStocks.map((stock) => (
                        <li key={stock.id}>{stock.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default LoggedOutHomePage;