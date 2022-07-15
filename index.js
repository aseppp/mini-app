require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
const router = require("./src/routes");
app.use("/mini-app", router);

app.get("/", (request, response) => {
  response.json("Hello from server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
