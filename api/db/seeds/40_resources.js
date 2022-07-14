/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {organization: 'National Suicide Prevention Lifeline', phone_number: '1-800-273-8255', email:'', type:'national', isFederal: true},
    {organization: 'Military One Source: Military and Family Life Counseling', phone_number: '800-342-9647', email:'https://www.militaryonesource.mil/confidential-help/non-medical-counseling/military-and-family-life-counseling/', type:'national', isFederal: true},
    {organization: 'Tricare', phone_number: '800-342-9647', email:'https://www.militaryonesource.mil/confidential-help/non-medical-counseling/military-and-family-life-counseling/', type:'national', isFederal: true},

  ]);
};
