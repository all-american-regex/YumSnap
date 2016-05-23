exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),
    // Inserts seed entries
    knex('categories').insert({
      type: 'Mexican'
    }),
    knex('categories').insert({
      type: 'American'
    }),
    knex('categories').insert({
      type: 'Asian'
    }),
    knex('categories').insert({
      type: 'Italian'
    }),
    knex('categories').insert({
      type: 'BBQ'
    })
  );
};
