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
  
//READ-----------------------------------------------------------------------------------------------
    
app.get('/', (req, res) => {
    
<<<<<<< HEAD
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

app.get('/members/:mid/survey_messages', (req, res) => {
=======
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
>>>>>>> seeding
    
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

module.exports = app;
