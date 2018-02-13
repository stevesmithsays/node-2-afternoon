const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use ( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set ('db', dbInstance) );

app.listen( port, () => { console.log('Server listening on port ${port}.'); } );

