exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('entries').del()
        .then(function () {
          // Inserts seed entries
          return knex('entries').insert([
            {
              id: 1,
              firstName: 'Regina',
              lastName: 'Lee',
              email: 'regina.v.lee@gmail.com',
              publicKey: '1234567890',
              authID: 'abcdefg'
            },
            {
              id: 2,
              firstName: 'Armen',
              lastName: 'Rostamian',
              email: 'me@rmenr.net',
              publicKey: '2345678901',
              authID: 'bcdefgh'
            },
            {
              id: 3,
              firstName: 'Alex',
              lastName: 'Kim',
              email: 'xandreus@',
              publicKey: '2345678901',
              authID: 'bcdefgh'
            },
          ]);
        })
    })
};
