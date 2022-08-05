const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5040;
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});