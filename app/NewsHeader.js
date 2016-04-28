import React from 'react';
import './NewsHeader.css';
import imageLogo from './y18.gif';

export default class NewsHeader extends React.Component {
  getLogin() {
    return (
        <div className="newsHeader-login">
          <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
        </div>
        );
  }

  getNav() {
    var navLinks = [
    {
      name: 'new',
      url: 'newest'
    },
    {
      name: 'comments',
      url: 'newcomments'
    },
    {
      name: 'show',
      url: 'show'
    },
    {
      name: 'ask',
      url: 'ask'
    },
    {
      name: 'jobs',
      url: 'jobs'
    },
    {
      name: 'submit',
      url: 'submit'
    }
    ];

    return (
        <div className="newsHeader-nav">
          {
            navLinks.map(function(navLink) {
              return (
                  <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/" + navLink.url} >
                    {navLink.name}
                  </a>
                  );
            })
          }
        </div>
        );
  }

  getLogo() {
    return (
        <div className="newsHeader-logo">
          <a href="https://news.ycombinator.com/"><img src={imageLogo} /></a>
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
          {this.getNav()}
          {this.getLogin()}
        </div>
        );
  }
}

