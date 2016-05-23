var passport = require('passport');
var User = require('../models/users');

module.exports = function () {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    User.verifyId(user.passid).then(function (data) {
        done(null, user);
      })
      .catch(function (err) {
        done(null, user);
      });
  });
};
