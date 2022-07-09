/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages_mhp').del()
  await knex('messages_mhp').insert([
    {members_id_to: 40, members_id_from: 12, comment: 'Hello, would you like to schedule an appointment?'},
    {members_id_to: 12, members_id_from: 40, comment: 'Yes, I would. Thank you for reaching out. How does next week Wednesday sound?'},
    {members_id_to: 53, members_id_from: 15, comment: 'Hello, Would you like to schedule an appointment?'},
    {members_id_to: 15, members_id_from: 53, comment: 'Thanks for reaching out, but maybe later.'},
  ]);
  await knex('messages_mhp').insert(generateRandomMessages());
};




function generateRandomMessages() {
  let result = []

  for (let i = 0; i < 500; i++)
  {
    let randomFrom = Math.ceil(Math.random() * 10 + 10)
    let randomTo = Math.ceil(Math.random() * 70 + 30)
    let randomSentence = faker.lorem.sentences().substring(0,255);
    result.push({members_id_to: randomTo, members_id_from: randomFrom, comment: randomSentence})
  }

  return result
}