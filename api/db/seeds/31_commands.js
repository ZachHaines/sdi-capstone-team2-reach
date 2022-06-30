/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('commands').del()
  await knex('commands').insert([

    // 1. Air Force: https://en.wikipedia.org/wiki/List_of_major_commands_of_the_United_States_Air_Force
    {name: 'Air Combat Command', abbreviation: 'ACC', agencies_id: 1},
    {name: 'Air Education and Training Command', abbreviation: 'AETC', agencies_id: 1},
    {name: 'Air Force Global Strike Command', abbreviation: 'AFGSC', agencies_id: 1},
    {name: 'Air Force Materiel Command', abbreviation: 'AFMC', agencies_id: 1},
    {name: 'Air Force Reserve Command', abbreviation: 'AFRC', agencies_id: 1},
    {name: 'Air Force Special Operations Command', abbreviation: 'AFSOC', agencies_id: 1},
    {name: 'Air Mobility Command', abbreviation: 'AWC', agencies_id: 1},
    {name: 'Pacific Air Forces', abbreviation: 'PACAF', agencies_id: 1},
    {name: 'U.S Air Forces in Europe – Air Forces Africa', abbreviation: 'USAFE-AFAFRICA', agencies_id: 1},
    
    //2. Army: https://www.army.mil/organization/
    {name: 'Futures Command', abbreviation: 'AFC', agencies_id: 2},
    {name: 'Material Command', abbreviation: 'AMC', agencies_id: 2},
    {name: 'Forces Command', abbreviation: 'FORSCOM', agencies_id: 2},
    {name: 'Training and Doctrine Command', abbreviation: 'TRADOC', agencies_id: 2},
    {name: 'Cyber Command', abbreviation: 'USARCYBER)', agencies_id: 2},
    {name: 'Military Surface Deployment and Distribution Command', abbreviation: 'SSDC', agencies_id: 2},
    {name: 'U.S. Army Central', abbreviation: 'USARCENT', agencies_id: 2},
    {name: 'U.S. Army Europe and Africa', abbreviation: 'USAREUR-AF', agencies_id: 2},
    {name: 'U.S. Army North', abbreviation: 'USARNORTH', agencies_id: 2},
    {name: 'U.S. Army Pacific', abbreviation: 'USARPAC', agencies_id: 2},
    {name: 'U.S. Army South', abbreviation: 'USARSOUTH', agencies_id: 2},
    {name: 'Space and Missile Defense Command', abbreviation: 'USASMDC', agencies_id: 2},
    {name: 'U.S. Army Special Operations Command', abbreviation: 'USASOC', agencies_id: 2},
    {name: 'Arlington National Cemetery', abbreviation: 'ANC', agencies_id: 2},
    {name: 'Test and Evaluation Command', abbreviation: 'ATEC', agencies_id: 2},
    {name: 'Civilian Human Resources Agency', abbreviation: 'CHRA', agencies_id: 2},
    {name: 'Human Resources Command', abbreviation: 'HRC', agencies_id: 2},
    {name: 'Intelligence and Security Command', abbreviation: 'INSCOM', agencies_id: 2},
    {name: 'Military District of Washington', abbreviation: 'MDW', agencies_id: 2},
    {name: 'Medical Command', abbreviation: 'MEDCOM', agencies_id: 2},
    {name: 'Military Postal Service Agency', abbreviation: 'MPSA', agencies_id: 2},
    {name: 'Acquisition Support Center ACQUISITION SUPPORT CENTER', abbreviation: 'USAASC', agencies_id: 2},
    {name: 'Corps of Engineers', abbreviation: 'USACE', agencies_id: 2},
    {name: 'Criminal Investigation Command', abbreviation: 'USACIDC', agencies_id: 2},
    {name: 'War College', abbreviation: 'USAWC', agencies_id: 2},
    {name: 'U.S. Military Academy', abbreviation: 'USMA', agencies_id: 2},

    // 6. Space Force
    {name: 'Space Operations Command', abbreviation: 'SpoC', agencies_id: 6},
    {name: 'Space Systems Command', abbreviation: 'SSC', agencies_id: 6},
    {name: 'Space Training and Readiness Command', abbreviation: 'STARCOM', agencies_id: 6},
  ]);
};
