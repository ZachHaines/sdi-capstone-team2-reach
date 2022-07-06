/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('grades').del()
  await knex('grades').insert([

    // Enlisted
    {grade: 'E-1', type: 'Enlisted'},
    {grade: 'E-2', type: 'Enlisted'},
    {grade: 'E-3', type: 'Enlisted'},
    {grade: 'E-4', type: 'Enlisted'},
    {grade: 'E-5', type: 'Enlisted'},
    {grade: 'E-6', type: 'Enlisted'},
    {grade: 'E-7', type: 'Enlisted'},
    {grade: 'E-8', type: 'Enlisted'},
    {grade: 'E-9', type: 'Enlisted'},

    // Warrant Officers
    {grade: 'W-1', type: 'Warrant Officer'},
    {grade: 'W-2', type: 'Warrant Officer'},
    {grade: 'W-3', type: 'Warrant Officer'},
    {grade: 'W-4', type: 'Warrant Officer'},
    {grade: 'W-5', type: 'Warrant Officer'},

    // Commissioned Officers
    {grade: 'O-1', type: 'Officer'},
    {grade: 'O-2', type: 'Officer'},
    {grade: 'O-3', type: 'Officer'},
    {grade: 'O-4', type: 'Officer'},
    {grade: 'O-5', type: 'Officer'},
    {grade: 'O-6', type: 'Officer'},
    {grade: 'O-7', type: 'Officer'},
    {grade: 'O-8', type: 'Officer'},
    {grade: 'O-9', type: 'Officer'},
    {grade: 'O-10', type: 'Officer'},

    // General Schedule
    {grade: 'GS-1', type: 'General Schedule'},
    {grade: 'GS-2', type: 'General Schedule'},
    {grade: 'GS-3', type: 'General Schedule'},
    {grade: 'GS-4', type: 'General Schedule'},
    {grade: 'GS-5', type: 'General Schedule'},
    {grade: 'GS-6', type: 'General Schedule'},
    {grade: 'GS-7', type: 'General Schedule'},
    {grade: 'GS-8', type: 'General Schedule'},
    {grade: 'GS-9', type: 'General Schedule'},
    {grade: 'GS-10', type: 'General Schedule'},
    {grade: 'GS-11', type: 'General Schedule'},
    {grade: 'GS-12', type: 'General Schedule'},
    {grade: 'GS-13', type: 'General Schedule'},
    {grade: 'GS-14', type: 'General Schedule'},
    {grade: 'GS-15', type: 'General Schedule'},

    // General Grade
    {grade: 'GG-1', type: 'General Grade'},
    {grade: 'GG-2', type: 'General Grade'},
    {grade: 'GG-3', type: 'General Grade'},
    {grade: 'GG-4', type: 'General Grade'},
    {grade: 'GG-5', type: 'General Grade'},
    {grade: 'GG-6', type: 'General Grade'},
    {grade: 'GG-7', type: 'General Grade'},
    {grade: 'GG-8', type: 'General Grade'},
    {grade: 'GG-9', type: 'General Grade'},
    {grade: 'GG-10', type: 'General Grade'},
    {grade: 'GG-11', type: 'General Grade'},
    {grade: 'GG-12', type: 'General Grade'},
    {grade: 'GG-13', type: 'General Grade'},
    {grade: 'GG-14', type: 'General Grade'},
    {grade: 'GG-15', type: 'General Grade'},

    // Senior Executive Service
    {grade: 'SES', type: 'Senior Executive Service'},
    
    // Contractor
    {grade: 'CTR', type: 'Contractor'},

    // Civilian (Family, Dependent, Other)
    {grade: 'CIV', type: 'Civilian'},

  ]);
};
