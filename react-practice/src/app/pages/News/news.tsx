import React, { useState } from 'react';

import Header from 'app/share/layout/header/header';
import News from '../../share/layout/partials/newsItem';
import data from 'app/share/fake-data/list-news.json';

import { NewsAttributes } from 'app/share/model/interfaceOfNews';

const GroupNews = () => {
  const [listNews, setListNews] = useState(data);
  return (
    <div>
      <Header />
      <section className="section-group-news">
        <div className="container">
          <ul className="list-group row news-group">
            {listNews?.map((news: NewsAttributes) => News(news))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default GroupNews;
