const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const knex = require('knex')(config)
//CREATE-----------------------------------------------------------------------------------------------

//READ-----------------------------------------------------------------------------------------------

// { 
    // app.use(cors({
    //     origin: '*',
    //     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    //   }));
    //   app.use(express.json());
    
    app.get('/', (request, response) => {
        
        console.log('checking this stuff')
        response.set("Access-Control-Allow-Origin", "*");
        response.status(200).send('App root route running');
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
        .where({id: req.params.id})
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
        // .where({id: req.params.id})
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve roles`))
    })

    app.get('/roles/:id', (req, res) => {
        knex('roles')
        .select('*')    
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

    app.get('/members/:mid/survey_messages', (req, res) => {
        
        knex('survey_messages')
        .select("*")
        .where({"Members id": req.params.mid})
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve messages for member ${req.params.mid}`))
    })
    
    // INCOMPLETE: RETURN TO THIS
    app.get('/members/:mid/survey_messages/:sid', (req, res) => {
        knex('survey_messages')
        .join('members', 'members.id', '=', 'members_id_from')
        .where(survey_id_from, members.id)
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve ${req.params.id}`))
    })

    //messages_MHP
    app.get('/messages', (req, res) => {
        knex('messages_MHP')
        .select('*')    
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve messages`))
    })

    app.get('/messages/:id', (req, res) => {
        knex('messages_MHP')
        .where({id: req.params.id})
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve message ${req.params.id}`))
    })

    //survey_messages
    app.get('/survey_messages', (req, res) => {
        knex('survey_messages')
        .select('*')    
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve surveys`))
    })

    app.get('/survey_messages/:id', (req, res) => {
        knex('survey_messages')
        .where({id: req.params.id})
        .then(data => res.status(200).json(data))
        .catch(() => res.status(404).send(`Could not retrieve survey `,req.params.id))
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
// }
//UPDATE-----------------------------------------------------------------------------------------------

//{ //update
    
//}

//DELETE-----------------------------------------------------------------------------------------------
//{ //delete
    
//}
module.exports = app;

