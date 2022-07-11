/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('survey_messages').del()
  await knex('survey_messages').insert([
    // messages reaching out to user 40
    {members_id_to: 40, members_id_from: 50, family: 1, social: 2, legal: 3, work: 1, health: 2, comment: 'concerned about family situation'},
    {members_id_to: 40, members_id_from: 66, family: 2, social: 1, legal: 1, work: 2, health: 3, comment: 'legal troubles affecting work and family'},
    {members_id_to: 40, members_id_from: 70, family: 1, social: 3, legal: 3, work: 1, health: 3, comment: 'family life affecting work performance'},
    {members_id_to: 40, members_id_from: 45, family: 3, social: 1, legal: 3, work: 3, health: 1, comment: 'physically injured, gaining weight, and more anti-social'},
    
    // messages reaching out to user 53
    {members_id_to: 53, members_id_from: 60, family: 1, social: 1, legal: 2, work: 1, health: 2, comment: 'struggling a lot at work'},
    {members_id_to: 53, members_id_from: 56, family: 2, social: 3, legal: 3, work: 2, health: 3, comment: 'seems like something is really off'},
    {members_id_to: 53, members_id_from: 51, family: 2, social: 2, legal: 3, work: 2, health: 3, comment: 'just seems off to me, and concerned'},
    {members_id_to: 53, members_id_from: 73, family: 2, social: 2, legal: 3, work: 1, health: 1, comment: 'chronic covid and health problems affecting work performance'},
    
    // messages from user 40 & 53 reaching out to users
    {members_id_to: 68, members_id_from: 40, family: 1, social: 1, legal: 3, work: 3, health: 2, comment: 'concerned about family and social life'},
    {members_id_to: 52, members_id_from: 40, family: 2, social: 3, legal: 2, work: 2, health: 3, comment: 'this person is going through a series of misfortune'},
    {members_id_to: 48, members_id_from: 53, family: 1, social: 3, legal: 3, work: 1, health: 1, comment: 'health, work, and family lowering morale'},
    {members_id_to: 37, members_id_from: 53, family: 3, social: 2, legal: 1, work: 3, health: 2, comment: 'worried their legal issues is bringing them down'},
  
  ]);
  await knex('survey_messages').insert(createRandomSurveys());
};

const createRandomSurveys = () => {
  let res = [];

  
  for (let i = 0; i < 500; i++)
  {
    const member_id_to = [43, 53, 68, 52, 48, 37];
    const n = Math.floor(Math.random() * 6);
    
    res.push({
      members_id_to: member_id_to[n],
      members_id_from: Math.floor(Math.random() * 100 + 1),
      family: Math.floor(Math.random() * 2 + 2),
      social: Math.floor(Math.random() * 3 + 1),
      legal: Math.floor(Math.random() * 2 + 2),
      date: randomDate(),
      work: Math.floor(Math.random() * 3 + 1),
      health: Math.floor(Math.random() * 3 + 1),
      comment: 'health, work, and family lowering morale'}
    )
  }

  return res;
}


function randomDate() {
  let start = new Date();
  start.setMonth(start.getMonth() - 18);
  let end = new Date()

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomDate()