var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./../webpack.config.js');
var compiler = webpack(config);
var passport = require('passport');
var Posts = require('./models/posts');
var Users = require('./models/users');
var logger = require('morgan');
var Path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var KnexSessionStore = require('connect-session-knex')(session);
var Knex = require('knex');
var knex = Knex({
  client: 'pg',
  connection: {
    database: 'yumsnap'
  }
});

var store = new KnexSessionStore({
  knex: knex,
  tablename: 'sessions'
});

var passportGithub = require('./auth/github');
var passportGoogle = require('./auth/google');
var passportLocal = require('./auth/local');
var passportTwitter = require('./auth/twitter');

var routes = express.Router();
var app = express();
app.use(logger('dev'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

var assetFolder = Path.resolve(__dirname, '../client');
app.use(express.static(assetFolder, {
  index: 'index.html'
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'supersecretysecret',
  store: store
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use('/', routes);


var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);

// ---------- Routes Start Here ------------- //

//get endpoint for json obj for posts
routes.get('/feed', function (req, res) {

  Posts.loader()
    .then(function (posts) {
      res.status(200).send(posts);
    })
    .catch(function (err) {
      return res.status(404).send(err);
    });
});

routes.get('/userstate', function (req, res) {

  if (req.user) {
    Users.grabID(req.user.passid).then(function (resp) {
      var obj = {};
      if (resp[0]) {
        obj = {
          user: req.user.user,
          passid: req.user.passid,
          userId: resp[0].uid,
          profile_picture: resp[0].profile_picture
        };
      } else {
        res.status(403).send();
      }
      res.status(200).send(JSON.stringify(obj));
    });
  } else {
    res.status(403).send();
  }
});

//get endpoint to serve up index.html
routes.get('/dashboard', function (req, res) {
  res.sendFile(assetFolder + '/index.html');
});

//post endpoint for user feed
routes.post('/feed', function (req, res) {
  var card = req.body;

  Posts.create(card)
    .then(function (post) {
      res.status(201).send(post);
    })
    .catch(function (err) {
      return res.status(404).send(err);
    });
});

routes.delete('/delete', function (req, res) {
  //add check to see if post id matches user id.
  Posts.delete(req.body)
    .then(function () {
      res.status(204).send();
    })
    .catch(function (err) {
      return res.status(404).send(err);
    });
});

routes.post('/upload', function (req, res) {
  var file = req.body;
  var path = "./client/pictures/test4.jpg";
  fs.writeFile(path, file.preview, function (err) {
    if (err) {
      throw err;
    }
  });
});

// endpoint thats only used to update categories table
routes.post('/categories', function (req, res) {
  var cats = req.body;

  Users.categories(cats)
    .then(function (cat) {
      res.status(201).send(cats);
    })
    .catch(function (err) {
      return res.status(404).send(err);
    });
});

//------Authentication Routes

// Github
routes.get('/auth/github', passportGithub.authenticate('github', {}));

routes.get('/auth/github/callback',
  passportGithub.authenticate('github', {
    failureRedirect: '/auth/github',
    successRedirect: '/'
  }));

// Google
routes.get('/auth/google', passportGoogle.authenticate('google', {
  scope: ['profile', 'email']
}));

routes.get('/auth/google/callback',
  passportGoogle.authenticate('google', {
    failureRedirect: '/auth/google',
    successRedirect: 'http://localhost:4000'
  }));

//Twitter
routes.get('/auth/twitter', passportTwitter.authenticate('twitter', {
  scope: ['user:email']
}));

routes.get('/auth/twitter/callback',
  passportTwitter.authenticate('twitter', {
    failureRedirect: '/auth/twitter',
    successRedirect: '/'
  }));

// LOGOUT
routes.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// -----------------Authenticate  login-----------------
// process the login form
routes.post('/login', passportLocal.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: 'http://www.google.com'
}));

// ----------------User  Registration------
// process the signup form
routes.post('/signup', passportLocal.authenticate('local-signup', {
  successRedirect: '/index.html',
  failureRedirect: 'http://www.yahoo.com'
}));
