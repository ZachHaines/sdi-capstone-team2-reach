const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const knex = require('knex')(config)
//CREATE-----------------------------------------------------------------------------------------------

//agencies
app.post('/agencies', (req, res) => {
    knex('agencies')
    .insert(req.body)
    .then(()=> knex('agencies'))
    .then(data => res.status(200).json(data))
});

//commands
app.post('/commands', (req, res) => {
    knex('commands')
    .insert(req.body)
    .then(()=> knex('commands'))
    .then(data => res.status(200).json(data))
});

//units
app.post('/units', (req, res) => {
    knex('units')
    .insert(req.body)
    .then(()=> knex('units'))
    .then(data => res.status(200).json(data))
});

//locations
app.post('/locations', (req, res) => {
    knex('locations')
    .insert(req.body)
    .then(()=> knex('locations'))
    .then(data => res.status(200).json(data))
});

//facilities
app.post('/facilities', (req, res) => {
    knex('facilities')
    .insert(req.body)
    .then(()=> knex('facilities'))
    .then(data => res.status(200).json(data))
});
  
//installations
app.post('/installations', (req, res) => {
    knex('installations')
    .insert(req.body)
    .then(()=> knex('installations'))
    .then(data => res.status(200).json(data))
});

//passwords
app.post('/passwords', (req, res) => {
    knex('passwords')
    .insert(req.body)
    .then(()=> knex('passwords'))
    .then(data => res.status(200).json(data))
})

//members
app.post('/members', (req, res) => {
    knex('members')
    .insert(req.body)
    .then(()=> knex('members'))
    .then(data => res.status(200).json(data))
})

//survey_messages
app.post('/surveymessages', (req, res) => {
    knex('survey_messages')
    .insert(req.body)
    .then(()=> knex('survey_messages'))
    .then(data => res.status(200).json(data))
})

//messages_mhp
app.post('/mhpmessages', (req, res) => {
    knex('messages_mhp')
    .insert(req.body)
    .then(()=> knex('messages_mhp'))
    .then(data => res.status(200).json(data))
})

//READ-----------------------------------------------------------------------------------------------
    
app.get('/', (req, res) => {
    
    console.log('checking this stuff')
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send('App root route running');
})

// locations
app.get('/locations', (req, res) => {
    knex('locations')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send('Could not retrieve locations'))
});

app.get('/locations/:id', (req, res) => {
    knex('locations')
    .where('id', req.params.id)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve location ${req.params.id}`))
});

// installations
app.get('/installations', (req, res) => {
    knex('installations')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve installations`))      
});

app.get('/installations/:id', (req, res) => {
    knex('installations')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve installation ${req.params.id}`))      
});

//units
app.get('/units', (req, res) => {
    knex('units')
    .select('*') 
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve units`))
})

app.get('/units/:id', (req, res) => {
    knex('units')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve unit ${req.params.id}`))
})

//roles
app.get('/roles', (req, res) => {
    knex('roles')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve roles`))
})

app.get('/roles/:id', (req, res) => {
    knex('roles')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve role ${req.params.id}`))
})

//members
app.get('/members', (req, res) => {
    knex('members')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve members`))
})

app.get('/members/:id', (req, res) => {
    knex('members')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve ${req.params.id}`))
})

//messages_MHP
app.get('/mhpmessages', (req, res) => {
    knex('messages_mhp')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve messages`))
})

app.get('/mhpmessages/members/:memberId', (req, res) => {
    knex('messages_mhp')
    .where({members_id_to: req.params.memberId})
    .orWhere({members_id_from: req.params.memberId})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve messages`))
})

//survey_messages
app.get('/surveymessages', (req, res) => {
    knex('survey_messages')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve surveys`))
})

// survey messages by member
app.get('/surveymessages/members/:memberId', (req, res) => {
    knex('survey_messages')
    .where({members_id_to: req.params.memberId})
    .orWhere({members_id_from: req.params.memberId})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve surveys`))
})

//resources
app.get('/resources', (req, res) => {
    knex('resources')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve units`))
})

app.get('/resources/:id', (req, res) => {
    knex('resources')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve resource `,req.params.id))
})

//commands
app.get('/commands', (req, res) => {
    knex('commands')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve commands`))
})

app.get('/commands/:id', (req, res) => {
    knex('commands')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve command ${req.params.id}`))
})

//agencies
app.get('/agencies', (req, res) => {
    knex('agencies')
    .select('*')    
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve agencies`))
})

app.get('/agencies/:id', (req, res) => {
    knex('agencies')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve agency ${req.params.id}`))
})

//passwords
app.get('/passwords', (req, res) => {
    knex('passwords')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve passwords`))
})

app.get('/passwords/:id', (req, res) => {
    knex('passwords')
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve password ${req.params.id}`))
})

app.get('/grades', (req, res) => {
    knex('grades')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not retrieve grades`))
})
    
//UPDATE-----------------------------------------------------------------------------------------------
    
//agencies
app.patch('/agencies/:id', (req, res) => {
    knex('agencies')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update agency ${req.params.id}`))
})

//commands
app.patch('/commands/:id', (req, res) => {
    knex('commands')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update command ${req.params.id}`))
})

//units
app.patch('/units/:id', (req, res) => {
    knex('units')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update unit ${req.params.id}`))
})

//locations
app.patch('/locations/:id', (req, res) => {
    knex('locations')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update location ${req.params.id}`))
})

//facilities
app.patch('/facilities/:id', (req, res) => {
    knex('facilities')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update facility ${req.params.id}`))
})

//installations
app.patch('/installations/:id', (req, res) => {
    knex('installations')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update installation ${req.params.id}`))
})

//passwords
app.patch('/passwords/:id', (req, res) => {
    knex('passwords')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update password ${req.params.id}`))
})

//members
app.patch('/members/:id', (req, res) => {
    knex('members')
    .update(req.body)
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not update member ${req.params.id}`))
})

//DELETE-----------------------------------------------------------------------------------------------

//agencies
app.delete('/agencies/:id', (req, res) => {
    knex('agencies')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete agency ${req.params.id}`))
})

//commands
app.delete('/commands/:id', (req, res) => {
    knex('commands')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete command ${req.params.id}`))
})

//units
app.delete('/units/:id', (req, res) => {
    knex('units')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete unit ${req.params.id}`))
})

//locations
app.delete('/locations/:id', (req, res) => {
    knex('locations')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete location ${req.params.id}`))
})

//facilities
app.delete('/facilities/:id', (req, res) => {
    knex('facilities')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete facility ${req.params.id}`))
})

//installations
app.delete('/installations/:id', (req, res) => {
    knex('installations')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete installation ${req.params.id}`))
})

//passwords
app.delete('/passwords/:id', (req, res) => {
    knex('passwords')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete password ${req.params.id}`))
})

//members
app.delete('/members/:id', (req, res) => {
    knex('members')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete member ${req.params.id}`))
})

//survey_messages
app.delete('/surveymessages/:id', (req, res) => {
    knex('survey_messages')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete survey ${req.params.id}`))
})

//message_MHP
app.delete('/mhpmessages/:id', (req, res) => {
    knex('messages_mhp')
    .delete()
    .where({id: req.params.id})
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send(`Could not delete message ${req.params.id}`))
})

module.exports = app;
