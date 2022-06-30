/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('units', table => {
    table.increments();
    table.string('name', 256);
    table.string('uic', 50);
    table.string('abbreviation', 64);
    table.integer('facilities_id');
    table.foreign('facilities_id').references('facilities.id');
    table.integer('commands_id');
    table.foreign('commands_id').references('commands.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('units', table => {
    table.dropForeign('facilities_id')
    table.dropForeign('commands_id')
  })
  .then(() => knex.schema.dropTableIfExists('units'));
};
