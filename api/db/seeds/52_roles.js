/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    user, admin, mhp, pcm, chaplain, sarc, dependent
  ])
};


const user = {id: 1, name: 'User', isUser: true, isAdmin: false, isMHP: false, isPCM: false, isChaplain: false, isSARC: false, isDependent: false};
const admin = {id: 2, name: 'Admin', isUser: true, isAdmin: true, isMHP: true, isPCM: false, isChaplain: false, isSARC: false, isDependent: false};
const mhp = {id: 3, name: 'MHP', isUser: true, isAdmin: false, isMHP: true, isPCM: false, isChaplain: false, isSARC: false, isDependent: false};
const pcm = {id: 4, name: 'PCM', isUser: true, isAdmin: false, isMHP: false, isPCM: true, isChaplain: false, isSARC: false, isDependent: false};
const chaplain = {id: 5, name: 'Chaplain', isUser: true, isAdmin: false, isMHP: false, isPCM: false, isChaplain: true, isSARC: false, isDependent: false};
const sarc = {id: 6, name: 'SARC', isUser: true, isAdmin: false, isMHP: false, isPCM: false, isChaplain: false, isSARC: true, isDependent: false};
const dependent = {id: 7, name: 'Dependent', isUser: true, isAdmin: false, isMHP: false, isPCM: false, isChaplain: false, isSARC: false, isDependent: true};


