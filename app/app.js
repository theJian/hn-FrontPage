import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList.js';
import './app.css';

$.ajax({
  url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  dataType: 'json'
}).then(function(stories) {
  var detailDeferreds = (stories.slice(0, 30)).map(function(itemId) {
    return $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
      dataType: 'json'
    });
  });
  return $.when.apply($, detailDeferreds);
}).then(function() {
  var args = Array.from(arguments);
  var items = args.map(function(arg) {
    return arg[0];
  });

  console.log(items);

  render(<NewsList items={items} />, $('#content')[0]);
});

