
const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('members').del()
  await knex('members').insert(randomAdmins);
  await knex('members').insert(randomMHPs);
  await knex('members').insert(randomChaplains);
  await knex('members').insert(randomMembers);
};

// 'generated' is the number of random records requested
function createRandomMembers(generated, roleId)  {
  const selectedFirstNames = [];
  const selectedLastNames = [];
  const entries = [];
  
  // create array of fake first and last names
  for (let i = 0; i < generated; i++) {
    selectedFirstNames.push(faker.name.firstName()); //The maximum is inclusive and the minimum is inclusive
    selectedLastNames.push(faker.name.lastName()); //The maximum is inclusive and the minimum is inclusive
  }

  // generate a database field object for each random entry
  for (let i = 0; i < generated; i++) {
    const domains = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@aol.com'];
    const n = Math.floor(Math.random() * 100);
    const domainIndex = (n < 40) ? 0 : (n < 70) ? 1 : (n < 90) ? 2 : 3;
    
    entries.push (
      {
        last_name: `${selectedLastNames[i]}`,
        first_name: `${selectedFirstNames[i]}`,
        grades_id: Math.floor(Math.random() * (57) + 1), // currently 57 grades in table
        username: `${selectedFirstNames[i]}.${selectedLastNames[i]}`,
        roles_id: roleId,
        units_id: Math.floor(Math.random() * (89) + 1), // currently 89 units in table
        religion: `religion`,
        phone_number: faker.phone.number('###-###-####'),
        email_primary: `${selectedFirstNames[i]}.${selectedLastNames[i]}@mail.mil`,
        email_secondary:`${selectedFirstNames[i]}.${selectedLastNames[i]}${domains[domainIndex]}`,
      }
    );
  }
  return entries;
};

// Call Functions 

// User
let generated = 70;
let roleId = 1;
const randomMembers = createRandomMembers(generated, roleId);

// Admin
generated = 10;
roleId = 2;
const randomAdmins = createRandomMembers(generated, roleId);

// MHP
generated = 10;
roleId = 3;
const randomMHPs = createRandomMembers(generated, roleId);

// Chaplains
generated = 10;
roleId = 5;
const randomChaplains = createRandomMembers(generated, roleId);
