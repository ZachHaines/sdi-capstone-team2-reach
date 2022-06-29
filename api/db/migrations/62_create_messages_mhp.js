/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('messages_mhp', table => {
    table.increments();
    table.string('comment', 256);
    table.timestamp('date').defaultTo(knex.fn.now());
    table.integer('members_id_to');
    table.foreign('members_id_to').references('members.id');
    table.integer('members_id_from');
    table.foreign('members_id_from').references('members.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('messages_mhp', table => {
    table.dropForeign('members_id_to')
    table.dropForeign('members_id_from')
  })
  .then(() => knex.schema.dropTableIfExists('messages_mhp'));
};
