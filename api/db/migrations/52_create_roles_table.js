/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('roles', table => {
    table.increments();
    table.boolean('isUser');
    table.boolean('isAdmin');
    table.boolean('isMHP');
    table.boolean('isChaplain');
    table.boolean('isSARC');
    table.boolean('isDependent');
    table.boolean('isPCM');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
