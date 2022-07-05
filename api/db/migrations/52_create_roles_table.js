/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('roles', table => {
    table.increments();
    table.string('name', 16);
    table.boolean('isUser');
    table.boolean('isAdmin');
    table.boolean('isMHP');
    table.boolean('isPCM');
    table.boolean('isChaplain');
    table.boolean('isSARC');
    table.boolean('isDependent');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
