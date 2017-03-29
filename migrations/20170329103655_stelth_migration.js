
exports.up = function (knex, Promise) {
  return knex.schema
    // It builds the requisite core tables
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('firstName', 20);
      table.string('lastName', 20);
      table.string('email', 25);
      table.string('publicKey', 25);
      // table.string('authID');
      table.timestamps(true);
    })
    .createTable('drops', (table) => {
      table.increments('id').primary();
      table.string('title', 20);
      table.string('data', 20);
      table.decimal('lat', 24, 12);
      table.decimal('lng', 24, 12);
      table.string('ownerID', 20);
      table.string('receiverID', 20);      
      table.timestamps(true);
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('drops')
};
