/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('units', table => {
    table.increments();
    table.string('name', 256);
    table.string('abbreviation', 64);
    table.string('uic', 50);
    table.integer('commands_id');
    table.foreign('commands_id').references('commands.id');
    /* Move these fields to a join table with units (many to many)
      table.integer('facilities_id');
      table.foreign('facilities_id').references('facilities.id');
    */ 
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('units', table => table.dropForeign('commands_id'))
  .then(() => knex.schema.dropTableIfExists('units'));
};
