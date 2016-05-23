var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var User = require('../models/users');
var config = require('./config');
var init = require('./init');


passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  },
  function (accessToken, refreshToken, profile, done) {

    User.verifyInsert(profile).then(function (obj) {
        var send = {
          user: obj.user,
          passid: obj.passid
        };
        return done(null, send);
      })
      .catch(function (err) {
        return done(null, err);
      });
  }));

// serialize user into the session
init();

module.exports = passport;
