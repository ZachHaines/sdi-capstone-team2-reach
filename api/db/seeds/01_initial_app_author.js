/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('app_authors').select('*')
    .then((rows) => {
      if (rows.length === 0) {
        return knex('app_authors').insert([
          {first_name: 'Anthony', last_name: 'Fine'},
          {first_name: 'Ryan', last_name: 'Guinter'},
          {first_name: 'Zachary', last_name: 'Haines'},
          {first_name: 'Cybyl', last_name: 'Hancock'},
          {first_name: 'Calvin', last_name: 'Suratos'}
        ]);
      }
    })
};
