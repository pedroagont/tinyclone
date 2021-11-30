exports.up = function(knex) {
  // CREAR TABLA
  return knex.schema.createTable('users', function(table) {
    table
      .string('userID', 6)
      .notNullable()
      .unique()
      .primary();
    table
      .string('email', 80)
      .notNullable()
      .unique();
    table.string('password', 80).notNullable();
    table
      .boolean('isActive')
      .notNullable()
      .defaultTo(true);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  // ELMINAR TABLA
  return knex.schema.dropTableIfExists('users');
};
