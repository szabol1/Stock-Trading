import React from 'react';
import './Articles.css';

const Articles = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>No articles available</p>;
  }

  return (
    <div className="articles-slider">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-item">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <div className="article-content">
        
                <h3 className="article-title">{article.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
