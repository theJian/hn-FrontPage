import React from 'react';
import './NewsHeader.css';

export default class NewsHeader extends React.Component {
  getLogo() {
    return (
        <div className="newsHeader-logo">
          <a href="https://news.ycombinator.com/"><img src="https://news.ycombinator.com/y18.gif"/></a>
        </div>
        );
  }
  
  getTitle() {
    return (
        <div className="newsHeader-title">
          <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
        </div>
        );
  }

  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          {this.getTitle()}
        </div>
        );
  }
}

