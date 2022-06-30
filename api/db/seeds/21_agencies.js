/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('agencies').del()
  await knex('agencies').insert([
    {name: 'Air Force'},
    {name: 'Army'},
    {name: 'Coast Guard'},
    {name: 'Marine Corps'},
    {name: 'Navy'},
    {name: 'Space Force'},
  ]);
};
