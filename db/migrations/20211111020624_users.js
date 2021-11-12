exports.up = function(knex) {
  // CREAR TABLA
  return knex.schema.createTable('users', function(table) {
    table
      .string('userID', 6)
      .notNullable()
      .unique()
      .primary();
    table
      .string('email', 50)
      .notNullable()
      .unique();
    table.string('password', 50).notNullable();
    table
      .boolean('isActive')
      .notNullable()
      .defaultTo(true);
  });
};

exports.down = function(knex) {
  // ELMINAR TABLA
  return knex.schema.dropTableIfExists('users');
};
