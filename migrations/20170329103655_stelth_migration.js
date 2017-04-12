
exports.up = function (knex, Promise) {
  return knex.schema
    // It builds the requisite core tables
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('publicKey');
      table.string('authID');
      table.string('picture');      
      table.timestamps(true);
    })
    .createTable('deadDrops', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('file');
      table.string('message');
      table.decimal('lat', 24, 12);
      table.decimal('lng', 24, 12);
      table.string('ownerID');
      table.string('receiverID');      
      table.timestamps(true);
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('deadDrops')
};
