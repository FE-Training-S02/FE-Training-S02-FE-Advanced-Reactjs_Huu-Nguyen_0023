import React from 'react';

import { NewsAttributes } from 'app/share/model/interfaceOfNews';

import { convertFromStringToDate } from 'app/share/helper/helperFunction';

const News = (props: NewsAttributes) => {
  const {
    id,
    topic,
    newsUrl,
    imageUrl,
    title,
    content,
    author,
    createAt,
    timeRead,
  } = props;
  const topicColor: { [key: string]: string } = {
    politic: '#D76362',
    religion: '#E1C34A',
    healthy: '#73B473',
    conflicts: '#56C0DC',
  };
  return (
    <li key={id} className="col-xl-8 offset-xl-2">
      <article className="news-item">
        <a href={newsUrl} className="news-link card card-horizontal">
          <div className="card-image news-image">
            <img src={imageUrl} alt={title} className="news-image" />
          </div>
          <div className="news-content card-body">
            <h5
              className="news-topic"
              style={{ color: topicColor[topic.toLowerCase()] }}
            >
              {topic.toUpperCase()}
            </h5>
            <h3 className="news-title card-title">{title}</h3>
            <p className="news-text card-text">{content}</p>
            <div className="news-info">
              <p className="news-info-item news-text">
                BY <span className="text-black">{author}</span>
              </p>
              <p className="news-text news-info-item">
                {convertFromStringToDate(createAt)}
              </p>
              <p className="news-text news-info-item">{timeRead} MINS READ</p>
            </div>
          </div>
        </a>
      </article>
    </li>
  );
};
export default News;
