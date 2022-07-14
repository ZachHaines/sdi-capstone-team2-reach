/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages_mhp').del()
  await knex('messages_mhp').insert([
    {members_id_to: 101, members_id_from: 107, comment: 'Thanks for reaching out, but maybe later.', date: andTheNextNextDay},
    {members_id_to: 107, members_id_from: 101, comment: 'Would you like to schedule an appointment?', date: andTheNextDay},
    {members_id_to: 101, members_id_from: 107, comment: 'Yes, I would. Thank you for reaching out.', date: tomorrow},
    {members_id_to: 107, members_id_from: 101, comment: 'Hello, just checking in, would you like some resources?', date: today},
  ]);
  await knex('messages_mhp').insert(generateRandomMessages());
};

const today = randomDate();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const andTheNextDay = new Date(today);
andTheNextDay.setDate(andTheNextDay.getDate() + 2);
const andTheNextNextDay = new Date(today);
andTheNextNextDay.setDate(andTheNextDay.getDate() + 3);

function randomDate() {
  let start = new Date();
  start.setMonth(start.getMonth() - 18);
  let end = new Date()

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomMessages() {
  let result = []


  
  for (let i = 0; i < 150; i++)
  {
    
    let randomFrom = Math.ceil(Math.random() * 10 + 10)
    let randomTo = Math.ceil(Math.random() * 70 + 30)
    
    const today = randomDate();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const andTheNextDay = new Date(today);
    andTheNextDay.setDate(andTheNextDay.getDate() + 2);
    
    let initialMHP = 'Hello, I am a mental health provider. I just wanted to reach out and share some resources available. Would you like that or schedule an apointment?';
    let memberResponse = `Thank you for reaching out. I would like resources and schedule an appointment.`
    let followupMHP = 'Great! I will send you a link for resources. How does next week Wednesday at 1400 sound?'
    
    result.push({members_id_to: randomTo, members_id_from: randomFrom, comment: initialMHP, date: today})
    result.push({members_id_to: randomFrom, members_id_from: randomTo, comment: memberResponse, date: tomorrow})
    result.push({members_id_to: randomTo, members_id_from: randomFrom, comment: followupMHP, date: andTheNextDay})

  }
  return result
}