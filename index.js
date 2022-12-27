const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const routes = require('./routes');

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'publics')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Le serveur à été démaré sur le port ${PORT}`);
});