/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments();
    table.string('organization', 256);
    table.string('phone_number', 256);
    table.string('email', 256);
    table.string('type', 256);
    table.boolean('isFederal');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
