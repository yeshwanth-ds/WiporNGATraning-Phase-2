const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const routes = require('./routes/routes'); 

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
