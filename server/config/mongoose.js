const mongooose = require('mongoose');
const db = "pirate"

mongooose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log(`Established a connection to ${db}`))
.catch(err => console.log("Something went wrong when connecing to the database", err));



