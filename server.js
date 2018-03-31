const express = require('express');
const morgan = require('morgan');

const app = express();

morgan('tiny');

app.use(express.static('dist'));

app.listen(3000, () => console.log('Listening on port 3000!'))