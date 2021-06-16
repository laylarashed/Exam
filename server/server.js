const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes/pirate')(app);
require('./routes/user')(app);


app.listen(port, () => console.log(`Listening at port: ${port}`));
