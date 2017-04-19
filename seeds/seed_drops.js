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
              message: 'Buffalo Wild Wings (in range)',
              lat:  33.977814,
              lng: -118.391896,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, // armen
            },
            {
              id: 2,
              title: 'Secret Message #2',
              file: 'wussup bro',
              message: 'behind hack reactor (in range)',
              lat:  33.973272,
              lng: -118.389053,
              ownerID: '110986321791592984628', // armen
              receiverID: 3, // alex
            },
            {
              id: 3,
              title: 'Test mission',
              file: 'stelth',
              message: 'univision (in range)',
              lat:  33.976368,
              lng: -118.388058,
              ownerID: '110986321791592984628', // alex
              receiverID: 1, //regina
            },
            {
              id: 4,
              title: 'io hokis',
              file: 'stelth',
              message: 'to the left(west) of hack reactor (in range)',
              lat:  33.974632,
              lng: -118.393716,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, //regina
            },
            {
              id: 5,
              title: 'sul lung tang',
              file: 'stelth',
              message: 'north (out of range)',
              lat: 33.983386,
              lng: -118.3986517,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, //regina
            },
            {
              id: 6,
              title: 'venti latte with whole milk',
              file: 'stelth',
              message: 'south (out of range)',
              lat: 33.9674444,
              lng: -118.387272,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, //regina
            },
            {
              id: 7,
              title: 'vape clouds',
              file: 'stelth',
              message: 'east (out of range)',
              lat: 33.983930,
              lng: -118.369651,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, //regina
            },
            {
              id: 8,
              title: 'lalalallalalalla',
              file: 'stelth',
              message: 'west (out of range)',
              lat: 33.965544,
              lng: -118.411943,
              ownerID: '110986321791592984628', // regina
              receiverID: 2, //regina
            },
          ]);
        })
    })
};
