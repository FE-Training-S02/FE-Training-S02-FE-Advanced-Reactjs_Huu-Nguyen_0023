import { INews } from 'app/share/types/interfaces';
import React, { useState, useEffect } from 'react';

const News = (props: INews) => {
  const [topicColor, setTopicColor] = useState('#D76362');
  useEffect(() => {
    if (props.topic === 'POLITIC') {
      setTopicColor(() => '#D76362');
    }
    if (props.topic === 'RELIGION') {
      setTopicColor(() => '#E1C34A');
    }
    if (props.topic === 'HEALTHY') {
      setTopicColor(() => '#73B473');
    }
    if (props.topic === 'CONFLICTS') {
      setTopicColor(() => '#56C0DC');
    }
  }, []);

  return (
    <li className='news-item'>
      <a href={props.newsUrl} className='news-link card card-horizontal'>
        <div className='card-image  news-image'>
          <img src={props.imageUrl} alt={props.imageUrl} className='news-image' />
        </div>
        <div className='news-content card-body'>
          <h5 className='news-topic' style={{ color: topicColor }}>
            {props.topic}
          </h5>
          <h3 className='news-title card-title'>{props.title}</h3>
          <p className='news-text card-text'>{props.content}</p>
          <div className='news-info'>
            <h5 className='news-info-item news-text'>
              BY <span className='text-black'>{props.author}</span>
            </h5>
            <h5 className='news-text news-info-item'>{props.createAt} EST</h5>
            <h5 className='news-text news-info-item'>{props.timeRead} MINS READ</h5>
          </div>
        </div>
      </a>
    </li>
  );
};
export default News;
