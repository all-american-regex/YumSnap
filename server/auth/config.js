//Create an app through the auth provider
//Update the config file with the required IDs and keys as well as a callback URL
var ids = {
 github: {
   clientID: "56e130ce9477409180e9",
   clientSecret: "28c1ab2d097f6b789a50a52928b31f878a4a44de",
   callbackURL: "http://localhost:4000/auth/github/callback"
 }
};

module.exports = ids;



 // linkedin: {
 //   clientID: 'get_your_own',
 //   clientSecret: 'get_your_own',
 //   callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
 // },
 // twitter: {
 //   consumerKey: 'get_your_own',
 //   consumerSecret: 'get_your_own',
 //   callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
 // }