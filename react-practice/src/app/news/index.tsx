import listNews from 'app/news/listNews.json';
import { INews } from 'app/share/types/interfaces';
import News from './partials';

const GroupNews = () => {
  return (
    <section className='section-group-news'>
      <ul className='list-group container news-group'>{listNews.map((news: INews) => News(news))}</ul>
    </section>
  );
};
export default GroupNews;
