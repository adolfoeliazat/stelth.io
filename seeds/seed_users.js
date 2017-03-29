exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('users').del()
        .then(function () {
          // Inserts seed users
          return knex('users').insert([
            {
              id: 1,
              firstName: 'Regina',
              lastName: 'Lee',
              email: 'regina.v.lee@gmail.com',
              publicKey: '1234567890',
            },
            {
              id: 2,
              firstName: 'Armen',
              lastName: 'Rostamian',
              email: 'me@rmenr.net',
              publicKey: '2345678901',
            },
            {
              id: 3,
              firstName: 'Alex',
              lastName: 'Kim',
              email: 'xandreus@la.com',
              publicKey: '2345678901',
            },
          ]);
        })
    })
};
