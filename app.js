const express = require('express');
const app = express();

app.use('/', require('./routes/index'));

const port = 10000;
app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});