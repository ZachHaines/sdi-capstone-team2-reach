/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('units').del()
  await knex('units').insert(airForceUnits); // 1. Air Force
  await knex('units').insert(armyUnits); // 2. Army
  await knex('units').insert(coastGuardUnits); // 3. Coast Guard
  await knex('units').insert(marineCorpsUnits); // 4. Marine Corps
  await knex('units').insert(navyUnits); // 5. Navy
  await knex('units').insert(spaceForceUnits); // 6. Space Force
};

/* -------- Unit Builder Function -------- */

const buildUnits = (baseName, abbrev, num) => {
  let units = [];
  for (let i = 1; i <= num; i++) {
    units.push({name: `${baseName} ${i}`, abbreviation: `${abbrev}-${i}`, commands_id: i})
  }
  console.log('units:', units)
  return units;
};

/* -------- 1. Air Force -------- */

const airForceUnits = buildUnits('Air Force Unit', 'USAF', 9);

/* -------- 2. Army -------- */

const armyUnits = buildUnits('Army Unit', 'USA', 26);

/* -------- 3. Coast Guard -------- */

const coastGuardUnits = buildUnits('Coast Guard Unit', 'USCG', 9);

/* -------- 4. Marine Corps -------- */

const marineCorpsUnits = buildUnits('Marine Corps Unit', 'USMC', 3);

/* -------- 5. Navy -------- */

const navyUnits = buildUnits('Navy Unit', 'USN', 23);

/* -------- 6. Space Force -------- */

const spaceForceUnits = [
  // Space Operations Command
  {name: 'Space Operations Command', abbreviation: 'SpOC', commands_id: 71},  
  {name: 'Space Delta 2', abbreviation: 'DEL2', commands_id: 71},  
  {name: 'Space Delta 3', abbreviation: 'DEL3', commands_id: 71},
  {name: 'Space Delta 4',  abbreviation: 'DEL4', commands_id: 71},
  {name: 'Space Delta 5', abbreviation: 'DEL5', commands_id: 71},
  {name: 'Space Delta 6', abbreviation: 'DEL6', commands_id: 71},
  {name: 'Space Delta 7', abbreviation: 'DEL7', commands_id: 71},
  {name: 'Space Delta 8', abbreviation: 'DEL8', commands_id: 71},
  {name: 'Space Delta 9', abbreviation: 'DEL9', commands_id: 71},
  {name: 'Space Delta 18', abbreviation: 'DEL18', commands_id: 71},

  // Space Systems Command
  {name: 'Space Systems Command', abbreviation: 'SSC', commands_id: 72},
  {name: 'Space Delta 30', abbreviation: 'DEL30', commands_id: 72},
  {name: 'Space Delta 45', abbreviation: 'DEL45', commands_id: 72},

  // Space Training and Readiness Command
  {name: 'Space Training and Readiness Command', abbreviation: 'STARCOM', commands_id: 73},
  {name: 'Space Delta 1', abbreviation: 'DEL1', commands_id: 73},
  {name: 'Space Delta 10', abbreviation: 'DEL10', commands_id: 73},
  {name: 'Space Delta 11', abbreviation: 'DEL11', commands_id: 73},
  {name: 'Space Delta 12', abbreviation: 'DEL12', commands_id: 73},
  {name: 'Space Delta 13', abbreviation: 'DEL13', commands_id: 73},
];