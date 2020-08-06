const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 1994;
const db = require("./queries");
var cors = require("cors");
// app.use(cors());

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
  next();
});


app.options("*", cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Postgres APIadfadsf" });
});

app.post("/companyusers", db.getAllUsers);
app.get("/test", db.getAllUserss);
// app.get('/vehicle/:id',db.getVehicleDisplayById)

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
