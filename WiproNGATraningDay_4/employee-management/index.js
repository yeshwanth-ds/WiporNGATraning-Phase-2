const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const employeeRoutes = require("./routes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Employee API is running!");
});

app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
