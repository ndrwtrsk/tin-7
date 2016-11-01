// Example model

const _ = require('lodash'),
      uuid = require('node-uuid');

var Article = {
  articles: [{
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "subtitle": "sunt aut facere repellat",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, {
    "id": 2,
    "title": "qui est esse",
    "subtitle": "sunt aut facere repellat",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }],
  all: function () {
    return this.articles;
  },
  findById: function (id) {
    var find = _.find(this.articles, function(o) { return o.id == id; });
    return find;
  },
  delete: function (id) {
    var foundArticleIndex = _.findIndex(this.articles, function(o) { return o.id == id; });
    if(foundArticleIndex === -1) return false;
    this.articles.splice(foundArticleIndex, 1);
    return true;
  },
  create: function (title, subtitle, body) {
    var toAdd = _.merge({title:title, subtitle:subtitle, body:body, id: uuid.v1()});
    this.articles.push(toAdd);
  },
  update: function (id, title, subtitle, body) {
    var foundArticle = _.find(this.articles, function(o) { return o.id == id; });
    if(!foundArticle) return false;
    foundArticle.title = title;
    foundArticle.subtitle = subtitle;
    foundArticle.body = body;
    return true;
  }
};

module.exports = Article;

