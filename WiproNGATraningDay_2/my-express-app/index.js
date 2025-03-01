const express = require("express");
const app = express();
const routes = require("./routes"); 
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use("/users", routes);

app.get("/", (req, res) => {
  res.send("Welcome to My Express API! Use /users to access user data.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
