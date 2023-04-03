const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/database');
const restaurantController = require('./controllers/controller');
const todoRoutes = require('./routes/routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.listen(port);

console.log(`API server started on port ${port}`);

app.use('/api', todoRoutes);
