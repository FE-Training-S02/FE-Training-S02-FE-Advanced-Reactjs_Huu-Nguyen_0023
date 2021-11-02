import { useState, useEffect } from 'react';
import { NewsAttributes } from 'app/share/types/interfaces';

const News = (props: NewsAttributes) => {
  const { topic, newsUrl, imageUrl, title, content, author, createAt, timeRead } = props;
  const [topicColor, setTopicColor] = useState('#D76362');
  useEffect(() => {
    if (topic === 'POLITIC') {
      setTopicColor(() => '#D76362');
    }
    if (topic === 'RELIGION') {
      setTopicColor(() => '#E1C34A');
    }
    if (topic === 'HEALTHY') {
      setTopicColor(() => '#73B473');
    }
    if (topic === 'CONFLICTS') {
      setTopicColor(() => '#56C0DC');
    }
  }, [topic]);

  return (
    <li className='col-xl-8 offset-xl-2'>
      <div className='news-item'>
        <a href={newsUrl} className='news-link card card-horizontal'>
          <div className='card-image  news-image'>
            <img src={imageUrl} alt={title} className='news-image' />
          </div>
          <div className='news-content card-body'>
            <h5 className='news-topic' style={{ color: topicColor }}>
              {topic}
            </h5>
            <h3 className='news-title card-title'>{title}</h3>
            <p className='news-text card-text'>{content}</p>
            <div className='news-info'>
              <h5 className='news-info-item news-text'>
                BY <span className='text-black'>{author}</span>
              </h5>
              <h5 className='news-text news-info-item'>{createAt} EST</h5>
              <h5 className='news-text news-info-item'>{timeRead} MINS READ</h5>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};
export default News;
