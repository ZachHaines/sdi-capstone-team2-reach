/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('commands', table => {
    table.increments();
    table.string('name', 256);
    table.string('abbreviation', 64);
    table.integer('agencies_id');
    table.foreign('agencies_id').references('agencies.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('commands', table => table.dropForeign('agencies_id'))
  .then(() => knex.schema.dropTableIfExists('commands'));
};
