/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('resources', table => {
    table.increments();
    table.string('organization', 50);
    table.string('phone_number', 50);
    table.string('email', 50);
    table.string('type', 50);
    table.boolean('isFederal');
    table.integer('facilities_id');
    table.foreign('facilities_id').references('facilities.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.alterTable('resources', table => table.dropForeign('facilities_id'))
  .then(() => knex.schema.dropTableIfExists('resources'));
};
