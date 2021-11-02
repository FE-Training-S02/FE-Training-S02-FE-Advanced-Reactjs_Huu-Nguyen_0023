import listNews from 'app/share/fakeData/list-news.json';
import { NewsAttributes } from 'app/share/types/interfaces';
import Header from 'app/share/layout/header';
import News from './partials/index';

const GroupNews = () => {
  return (
    <div>
      <Header />
      <section className='section-group-news'>
        <div className='container'>
          <ul className='list-group row news-group'>
            {listNews &&
              listNews.map((news: NewsAttributes) => (
                <News
                  key={news.id}
                  id={news.id}
                  topic={news.topic}
                  type={news.type}
                  newsUrl={news.newsUrl}
                  imageUrl={news.imageUrl}
                  title={news.title}
                  content={news.content}
                  author={news.author}
                  createAt={news.createAt}
                  timeRead={news.timeRead}
                />
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default GroupNews;
