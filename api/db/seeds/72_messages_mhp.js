/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages_mhp').del()
  await knex('messages_mhp').insert([
    {members_id_to: 40, members_id_from: 12, comment: 'Hello, would you like to schedule an appointment?'},
    {members_id_to: 12, members_id_from: 40, comment: 'Yes, I would. Thank you for reaching out. How does next week Wednesday sound?'},
    {members_id_to: 53, members_id_from: 15, comment: 'Hello, Would you like to schedule an appointment?'},
    {members_id_to: 15, members_id_from: 53, comment: 'Thanks for reaching out, but maybe later.'},
  ]);
};
