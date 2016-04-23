import React from 'react';
import './NewsItem.css';

export default class NewsItem extends React.Component {
  render() {
    return (
        <div className="newsItem">
          <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        </div>
        );
  }
}
