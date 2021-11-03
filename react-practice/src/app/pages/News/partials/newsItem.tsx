import React from 'react';
import { NewsAttributes } from 'app/share/model/interfaceOfNews';

interface topicColorAttribute {
  [key: string]: string;
  POLITIC: string;
  RELIGION: string;
  HEALTHY: string;
  CONFLICTS: string;
}

const convertFromStringToDate = (responseDate: any) => {
  let dateComponents = responseDate.replace('Z', '').split('T');
  let datePieces = dateComponents[0].split('-');
  let timePieces = dateComponents[1].split(':');
  return `${datePieces[2]}/0${parseInt(datePieces[1])}/${datePieces[0]} ${timePieces[0]}:${
    timePieces[1]
  } EST`;
};

const News = (props: NewsAttributes) => {
  const { topic, newsUrl, imageUrl, title, content, author, createAt, timeRead } = props;
  const topicColor: topicColorAttribute = {
    POLITIC: '#D76362',
    RELIGION: '#E1C34A',
    HEALTHY: '#73B473',
    CONFLICTS: '#56C0DC',
  };

  return (
    <li className='col-xl-8 offset-xl-2'>
      <div className='news-item'>
        <a href={newsUrl} className='news-link card card-horizontal'>
          <div className='card-image news-image'>
            <img src={imageUrl} alt={title} className='news-image' />
          </div>
          <div className='news-content card-body'>
            <h5 className='news-topic' style={{ color: topicColor[topic] }}>
              {topic}
            </h5>
            <h3 className='news-title card-title'>{title}</h3>
            <p className='news-text card-text'>{content}</p>
            <div className='news-info'>
              <p className='news-info-item news-text'>
                BY <span className='text-black'>{author}</span>
              </p>
              <p className='news-text news-info-item'>{convertFromStringToDate(createAt)}</p>
              <p className='news-text news-info-item'>{timeRead} MINS READ</p>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};
export default News;
