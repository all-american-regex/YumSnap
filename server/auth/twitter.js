var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/users');
var config = require('./config');
var init = require('./init');

passport.use(new TwitterStrategy({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callbackURL: config.twitter.callbackURL
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
