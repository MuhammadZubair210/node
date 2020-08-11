const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 1994;
const db = require("./queries");
var cors = require("cors");
// app.use(cors());

const Pool = require("pg").Pool;
const pool = new Pool({
  // user: "me", //db user
  // host: "18.222.64.141", //db host etc: 127.0.0.1
  // database: "energygigsdb", //db name
  // password: "password", // password
  // port: 5432, // db port etc: 5432 for postgresql
  host: "energygigs.cx6folrfiqfh.us-east-2.rds.amazonaws.com",
  user: "postgres",
  password: "postgres",
  port:5432
});


pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  pool.end();
});

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
