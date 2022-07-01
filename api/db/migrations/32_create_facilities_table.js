/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('facilities', table => {
    table.increments();
    table.string('name', 256);
    table.integer('locations_id');
    table.foreign('locations_id').references('locations.id');
    table.string('url', 100);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.alterTable('facilities', table => table.dropForeign('locations_id'))
  .then(() => knex.schema.dropTableIfExists('facilities'));
};
