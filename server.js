const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const apiRoutes = require('./routes/api-routes/index');
const htmlRoutes = require('./routes/html-routes/index.js');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});