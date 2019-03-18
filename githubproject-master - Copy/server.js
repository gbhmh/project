const express = require('express');
const cors= require('cors');
const server = express();

var corsoptions ={
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsoptions));

server.listen(8000, () => {
  console.log('Server started!');
});

const upload =require('./upload')
server.post('/upload',upload);


