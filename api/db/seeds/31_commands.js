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
    
    // 3. Coast Guard: https://en.wikipedia.org/wiki/Organization_of_the_United_States_Coast_Guard
    {name: 'Alatantic Area - District 1', abbreviation: 'AA-D1' , agencies_id: 3},
    {name: 'Alatantic Area - District 5', abbreviation: 'AA-D5' , agencies_id: 3},
    {name: 'Alatantic Area - District 7', abbreviation: 'AA-D7' , agencies_id: 3},
    {name: 'Alatantic Area - District 8', abbreviation: 'AA-D8' , agencies_id: 3},
    {name: 'Alatantic Area - District 9', abbreviation: 'AA-D9' , agencies_id: 3},
    {name: 'Pacific Area - District 11', abbreviation: 'PA-D11' , agencies_id: 3},
    {name: 'Pacific Area - District 13', abbreviation: 'PA-D13' , agencies_id: 3},
    {name: 'Pacific Area - District 14', abbreviation: 'PA-D14' , agencies_id: 3},
    {name: 'Pacific Area - District 17', abbreviation: 'PA-D17' , agencies_id: 3},
    
    // 4. Marine Corps: https://en.wikipedia.org/wiki/List_of_United_States_Marine_Corps_divisions
    {name: '1st Marine Division', abbreviation: '1st MARDIV' , agencies_id: 4},
    {name: '2nd Marine Division', abbreviation: '2nd MARDIV' , agencies_id: 4},
    {name: '3rd Marine Division', abbreviation: '3rd MARDIV' , agencies_id: 4},
    
    // 5. Navy: https://en.wikipedia.org/wiki/Structure_of_the_United_States_Navy
    {name: 'United States Fleet Forces Command', abbreviation: 'USFF' , agencies_id: 5},
    {name: 'United States Pacific Fleet', abbreviation: 'USPACFLT' , agencies_id: 5},
    {name: 'United States Naval Forces Central Command', abbreviation: 'NAVCENT' , agencies_id: 5},
    {name: 'U.S. Naval Forces Southern Command', abbreviation: 'USNAVSO' , agencies_id: 5},
    {name: 'United States Naval Forces Europe-Africa', abbreviation: 'CNE-CNA' , agencies_id: 5},
    {name: 'U.S. Fleet Cyber Command', abbreviation: 'FCC' , agencies_id: 5},
    {name: 'United States Navy Reserve', abbreviation: 'USNR' , agencies_id: 5},
    {name: 'United States Naval Special Warfare Command', abbreviation: 'USNSWC' , agencies_id: 5},
    {name: 'Operational Test and Evaluation Force', abbreviation: 'OPTEVFOR' , agencies_id: 5},
    {name: 'Naval Sea Systems Command', abbreviation: 'NAVSEA' , agencies_id: 5},
    {name: 'Naval Air Systems Command', abbreviation: 'NAVAIR' , agencies_id: 5},
    {name: 'Naval Facilities Engineering Systems Command', abbreviation: 'NAVFAC' , agencies_id: 5},
    {name: 'Naval Supply Systems Command', abbreviation: 'NAVSUP' , agencies_id: 5},
    {name: 'Naval Information Warfare Systems Command', abbreviation: 'NAVWARSYSCOM' , agencies_id: 5},
    {name: 'United States Naval Academy', abbreviation: 'USNA' , agencies_id: 5},
    {name: 'Naval Education and Training Command', abbreviation: 'NETC' , agencies_id: 5},
    {name: 'Naval Meteorology and Oceanography Command', abbreviation: 'CNMOC' , agencies_id: 5},
    {name: 'Office of Naval Intelligence', abbreviation: 'ONI' , agencies_id: 5},
    {name: 'Naval Strike and Air Warfare Center', abbreviation: 'NAWDC' , agencies_id: 5},
    {name: 'Naval Security Group', abbreviation: 'NAVSECGRU' , agencies_id: 5},
    {name: 'Naval Legal Service Command', abbreviation: 'NLSC' , agencies_id: 5},
    {name: 'United States Naval Observatory', abbreviation: 'USNO' , agencies_id: 5},
    {name: 'Naval Safety Center', abbreviation: 'NAVSAFECOM' , agencies_id: 5},    

    // 6. Space Force
    {name: 'Space Operations Command', abbreviation: 'SPoC', agencies_id: 6},
    {name: 'Space Systems Command', abbreviation: 'SSC', agencies_id: 6},
    {name: 'Space Training and Readiness Command', abbreviation: 'STARCOM', agencies_id: 6},
  ]);
};
