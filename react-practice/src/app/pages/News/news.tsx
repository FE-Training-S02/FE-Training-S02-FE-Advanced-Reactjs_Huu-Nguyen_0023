import Header from 'app/share/layout/header/header';
import listNews from 'app/share/fake-data/list-news.json';
import News from './partials/newsItem';
import React from 'react';
import { NewsAttributes } from 'app/share/model/interfaceOfNews';

const GroupNews = () => {
  return (
    <div>
      <Header />
      <section className='section-group-news'>
        <div className='container'>
          <ul className='list-group row news-group'>
            {listNews?.map((news: NewsAttributes) => News(news))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default GroupNews;
