/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('passwords').del()
  await knex('passwords').insert(passwords);
};


const buildPasswords = (num) => {
  let passwords = [];
  for (let i = 1; i <= num; i++) {
    passwords.push({password: `MyPassword-${i}`, salt: `SaltMyPassword-${i}`})
  }
  return passwords;
};

const passwords = buildPasswords(10);