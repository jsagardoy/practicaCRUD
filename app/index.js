const express = require('express');
const app = express();
const data = require('data');
const operationRoutes = require('../routes/operation.routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const uri = 'mongodb://localhost/ucoDB';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use(cors());

data.connect(uri);

app.use('/api/operations', operationRoutes(data.Operations));

app.listen(4000);




