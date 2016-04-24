import React from 'react';
import URL from 'url';
import './NewsItem.css';

export default class NewsItem extends React.Component {
  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }

  render() {
    return (
        <div className="newsItem">
          <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
          <span className="newsItem-domain">
            ({this.getDomain()})
          </span>
        </div>
        );
  }
}

