var db = require('./../../app/db');

var Post = module.exports;

Post.create = function (incomingAttrs) {
  var attrs = Object.assign({}, incomingAttrs);

  return db('posts').insert(attrs)
    .then(function (result) {
      return result[0];
    });
};

Post.loader = function () {
  return db.select('*').from('posts').innerJoin('users', 'posts.user_id',
      'users.uid').orderBy('timestamp', 'desc')
    .then(function (result) {
      return result;
    });
};

Post.delete = function (cardID) {
  return db.delete('*').from('posts').where(cardID)
    .then(function () {
      return;
    });
};
