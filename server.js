const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

// Connect to the database here.
require("./server/config/mongoose.config");

// This part handles the post requests.
app.use(express.json(), express.urlencoded({extended: true}));

// Connect to routes.
require("./server/routes/pet.routes")(app);

app.listen(port, () => console.log(`Running on port ${port}!!!`));