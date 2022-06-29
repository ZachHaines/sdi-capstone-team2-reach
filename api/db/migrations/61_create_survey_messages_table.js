/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('survey_messages', table => {
    table.increments();
    table.integer('family');
    table.integer('social');
    table.integer('social');
    table.integer('legal');
    table.integer('work');
    table.integer('health');
    table.string('comment', 256);
    // table.timestamp('date').defaultTo(knex.fn.now());
    // table.integer('members_id_to');
    // table.foreign('members_id_to').references('members.id');
    // table.integer('members_id_from');
    // table.foreign('members_id_from').references('members.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('survey_messages', table => {
    table.dropForeign('members_id_to')
    table.dropForeign('members_id_from')
  })
  .then(() => knex.schema.dropTableIfExists('survey_messages'));
};
