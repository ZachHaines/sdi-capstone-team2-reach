/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('members', table => {
    table.increments();
    table.string('last_name', 50);
    table.string('first_name', 50);
    table.integer('grades_id');
    table.foreign('grades_id').references('grades.id');
    table.string('username', 50);
    table.integer('passwords_id');
    table.foreign('passwords_id').references('passwords.id');
    table.integer('roles_id');
    table.foreign('roles_id').references('roles.id');
    table.integer('units_id');
    table.foreign('units_id').references('units.id');
    table.string('religion', 50);
    table.string('phone_number', 50);
    table.string('email_primary', 50);
    table.string('email_secondary', 50);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('members', table => {
    table.dropForeign('roles_id')
    table.dropForeign('passwords_id')
    table.dropForeign('units_id')
  })
  .then(() => knex.schema.dropTableIfExists('members'));
};
