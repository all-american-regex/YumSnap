exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({
      user: 'Harry',
      password: 'Harry',
      profile_picture: 'https://avatars2.githubusercontent.com/u/13039425?v=3&s=120'
    }),
    knex('users').insert({
      user: 'Jack',
      password: 'Jack',
      profile_picture: 'https://avatars0.githubusercontent.com/u/1456298?v=3&s=120'
    }),
    knex('users').insert({
      user: 'Lance',
      password: 'lance',
      profile_picture: 'https://avatars.githubusercontent.com/u/15279951?v=3'
    }),
    knex('users').insert({
      user: 'Matt',
      password: 'Matt',
      profile_picture: 'https://avatars3.githubusercontent.com/u/16504253?v=3&s=120'
    }),
    knex('users').insert({
      user: 'PJ',
      password: 'PJ',
      profile_picture: 'https://avatars1.githubusercontent.com/u/15724258?v=3&s=120'
    }),
    knex('users').insert({
      user: 'Will',
      password: 'Ferrell',
      profile_picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTDrOm65JQyGnjuUS-HxMyerVGQJfU5d3sSB18_hJFFtHLCEXr'
    })
  );
};
