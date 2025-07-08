import React from 'react';
import {createRoot} from 'react-dom/client';
import { useState } from 'react';
import Header from './components/header/header';
// import StatePlayground from './components/playground/state';
import NewsList from './components/news_list';
import { newsData } from './utils/data';
import './styles/styles.css';

const App = () => {

  let [news, setNews] = useState(newsData); 

  const getKeywords = (event) => {
    let keywords = event.target.value;

    let filteredNews = newsData.filter(item => {
      return item.title.toLowerCase().includes(keywords.toLowerCase()) || 
             item.feed.toLowerCase().includes(keywords.toLowerCase());
    });
    setNews(filteredNews);
  };

  return (
    <>
      <Header getKeywords = {getKeywords}/>
      <div className='container'>
        <NewsList news={news}/>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);