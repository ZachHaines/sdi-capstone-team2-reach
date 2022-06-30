/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('installations', table => {
    table.increments();
    table.string('name', 256);
    table.integer('locations_id');
    table.foreign('locations_id').references('locations.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.alterTable('installations', table => table.dropForeign('locations_id'))
  .then(() => knex.schema.dropTableIfExists('installations'));
};