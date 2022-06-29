/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('facilities', table => {
    table.increments();
    table.string('name', 256);
    table.integer('installations_id');
    table.foreign('installations_id').references('installations.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.alterTable('facilities', table => table.dropForeign('installations_id'))
  .then(() => knex.schema.dropTableIfExists('facilities'));
};
