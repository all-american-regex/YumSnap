# YumSnap!
###*Share photos and rate food dishes from local restaurants*
![ScreenShot](/client/YumSnap2.png?raw=true)

## Summary ##
YumSnap! is like a combination of Twitter and Yelp, but focused on individual menu items. Using our app, a user can post a new dish to the 'dish feed' that contains information such as the name of the dish, a photo of the dish, the restaurant it can be purchased at, a description of the dish, and the price. Users can then browse our app to see the dishes that people around them have been enjoying. If a user finds a dish they are interested in, all of the relevant information needed to find that dish is clearly listed on our page.

## Database Setup

If you don't have Postgres on your computer run
```
brew install postgres
```
Run npm install
and then run:
```
npm install -g knex
```
Then start your database and run:
```
postgres -D /usr/local/var/postgres
```
In another terminal window:
```
createdb yumsnap
knex migrate:latest
knex seed:run
```
If the db gets effed up:
```
dropdb yumsnap
createdb yumsnap
```

Do not CTRL-C to stop Postgres
To stop your database:
```
pg_ctl -D /usr/local/var/postgres stop -s -m fast
```
Some helpful bash aliases:
```
alias restartyumdb='dropdb yumsnap; createdb yumsnap;knex migrate:latest; knex seed:run'
alias startyum='postgres -D /usr/local/var/postgres'
alias stopyum='pg_ctl -D /usr/local/var/postgres stop -s -m fast'
```
