exports.up = function (knex) {
	// CREAR TABLA
	return knex.schema.createTable("urls", function (table) {
		table.string("urlID", 6).notNullable().unique().primary();
		table.string("longURL", 50).notNullable().unique();
		table.string("userID", 6).notNullable();
		table.timestamp("createdAt").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	// ELMINAR TABLA
	return knex.schema.dropTableIfExists("urls");
};
