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

// create random pool of first and last names
// https://editor.p5js.org/a.j.fine1999/full/W6cllWCgE (open the console.log to view names)
const listOfFirstNames = [ // 100 names
  'Strijd', 'Vertrouwen', 'Krachten', 'City', 'Ruzie', 'Des', 'Ziek', 'Gelukkig', 'Perfect', 'Verhaal', 
  'Steken', 'Eieren', 'Vernietigen', 'Volgende', 'Begon', 'Vandaag', 'Feest', 'Meneer', 'Gewone', 'Paniek', 
  'Voorzichtig', 'Stukken', 'Kampioen', 'Draagt', 'Wel', 'Kampioen', 'Nog', 'Hoeveel', 'Aanval', 'Kunt', 
  'Noemde', 'Wist', 'Papier', 'Eieren', 'Gestopt', 'Liefde', 'Proces', 'Leef', 'Bill', 'Spel', 
  'Groter', 'Krijgt', 'Collega', 'Erbij', 'Naast', 'Lee', 'Hadden', 'Pistool', 'Adres', 'Trein',

  'Geschreven', 'Ziet', 'Mijne', 'Gezocht', 'Strijd', 'Werken', 'Sam', 'Denkt', 'Lachen', 'Echte',
  'Speelt', 'Kiezen', 'Echte', 'Veiligheid', 'Wanneer', 'Meteen', 'Moe', 'Maat', 'Vraagt', 'Helpen', 
  'Draai', 'Chef', 'Motor', 'Gast', 'Simon', 'Breken', 'Leg', 'Hangt', 'Kom', 'Drie', 
  'Uitgenodigd', 'Bestaan', 'Lee', 'Speelt', 'Generaal', 'Kalm', 'Spreken', 'Gehaald', 'Breken', 'Krijgt', 
  'Weer', 'Nieuws', 'Vernietigen', 'Klinkt', 'Kalm', 'Meestal', 'Liefde', 'Geen', 'Hond', 'Gezocht'
];

const listOfLastNames = [ // 100 names
  'Stom', 'Twijfel', 'Verhaal', 'Wei', 'Brian', 'Machine', 'Nat', 'Last', 'Peter', 'Hi', 
  'Paniek', 'Frankrijk', 'Schoonheid', 'Kampioen', 'Ene', 'Liedje', 'Elf', 'Half', 'Koffer', 'Stom', 
  'Tuurlijk', 'Gesprek', 'Zaken', 'Gauw', 'Punten', 'Wel', 'Gebeurt', 'Zwaard', 'Veiligheid','Erachter', 
  'Bedacht', 'Pistool', 'Wou', 'Drie', 'Werk', 'Stom', 'Schuldig', 'Echte', 'Liefde', 'Persoonlijk', 
  'Gelukkig', 'Louis', 'Kwamen', 'Vannacht', 'Schreef', 'Eigenaar', 'Jezelf', 'Samen', 'Oorlog', 'Gebruik',

  'Beurt', 'Gekregen', 'Erbij', 'Dr', 'Ligt', 'Want', 'Loop', 'Stuk', 'Noorden', 'Grote', 
  'Ha', 'Brood', 'Trut', 'Gedrag', 'Of', 'Stellen', 'Helaas', 'Koud', 'Jezus', 'Teken', 
  'Spreek', 'Nick', 'Chicago', 'Loop', 'Breken', 'Zelfmoord', 'Joe', 'We', 'Zes', 'Hield', 
  'Ergste', 'Vingers', 'Professor', 'Jongen', 'Jake', 'Gezocht', 'Nooit', 'Liegen', 'Vrij', 'Hopen', 
  'Bewijs', 'Vorige', 'Mensen', 'Kolonel', 'Geschreven', 'Persoonlijk', 'Hoed', 'Vernietigen', 'Gevecht', 'Hoe'
];

// max is the total number names on the list of names; 
// generated is the number of random records requested
function createRandomMembers(max, generated, roleId)  {
  const selectedFirstNames = [];
  const selectedLastNames = [];
  const phoneNumbers = [];
  const entries = [];

  // generate random phone numbers
  for (let i = 0; i < generated; i++) {
    let digits = [];
    for (let j = 0; j < 11; j++) {
      digits.push(Math.floor(Math.random() * 10 )); // number 0 - 9
    }
    const phoneNumber = '('+digits[0]+digits[1]+digits[2]+') '+digits[3]+digits[4]+digits[5]+'-'+digits[6]+digits[7]+digits[8]+digits[9];
    phoneNumbers.push(phoneNumber);
  }
  
  // push random first and last name to arrays
  const min = 1;
  max = Math.floor(max);
  for (let i = min; i <= generated; i++) {
    selectedFirstNames.push(listOfFirstNames[(Math.floor(Math.random() * (max - min + 1) + min))]); //The maximum is inclusive and the minimum is inclusive
    selectedLastNames.push(listOfLastNames[(Math.floor(Math.random() * (max - min + 1) + min))]); //The maximum is inclusive and the minimum is inclusive
  }

  // generate a database field object for each random entry
  for (let i = 0; i < generated; i++) {
    entries.push (
      {
        last_name: `${selectedLastNames[i]}`,
        first_name: `${selectedFirstNames[i]}`,
        grades_id: Math.floor(Math.random() * (57) + 1), // currently 57 grades in table
        username: `${selectedFirstNames[i]}.${selectedLastNames[i]}`,
        roles_id: roleId,
        units_id: Math.floor(Math.random() * (89) + 1), // currently 89 units in table
        religion: `religion`,
        phone_number: phoneNumbers[i],
        email_primary: `${selectedFirstNames[i]}.${selectedLastNames[i]}@mail.mil`,
        email_secondary:`${selectedFirstNames[i]}.${selectedLastNames[i]}@gmail.com`,

      }
    );
  }
  return entries;
}

let listOfNamesMax = 100;  
let numberOfRandomMembers = 70;
const randomMembers = createRandomMembers(listOfNamesMax, numberOfRandomMembers, 1);

listOfNamesMax = 100;  
numberOfRandomMembers = 10;
const randomAdmins = createRandomMembers(listOfNamesMax, numberOfRandomMembers, 2);

listOfNamesMax = 100;  
numberOfRandomMembers = 10;
const randomMHPs = createRandomMembers(listOfNamesMax, numberOfRandomMembers, 3);

listOfNamesMax = 100;  
numberOfRandomMembers = 10;
const randomChaplains = createRandomMembers(listOfNamesMax, numberOfRandomMembers, 5);
