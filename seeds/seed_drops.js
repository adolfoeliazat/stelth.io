exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => {
      return knex('deadDrops').del()
        .then(function () {
          // Inserts seed deadDrops
          return knex('deadDrops').insert([
            {
              id: 1,
              title: 'Secret Mission #1',
              file: 'Hello World!',
              message: 'dude this stuff is awesome bruh',
              lat:  33.9759435,
              lng: -118.3907289,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, // armen
            },
            {
              id: 2,
              title: 'Secret Message #2',
              file: 'wussup bro',
              message: 'dude this stuff is awesome sis',
              lat:  29.9759244,
              lng: -118.390767,
              ownerID: 2, // armen
              receiverID: 3, // alex
            },
            {
              id: 3,
              title: 'Test mission',
              file: 'stelth',
              message: 'dude this stuff is awesome mum',
              lat:  -33.152423,
              lng: -118.613245,
              ownerID: 3, // alex
              receiverID: 1, //regina
            },
          ]);
        })
    })
};
