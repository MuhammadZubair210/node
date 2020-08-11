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


// pool.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   pool.end();
// });
// `INSERT INTO companyusers (companyname, email, password, companyaddress, city, zipcode, companysize, industry, companywebsite, logo) VALUES(${obj.details.companyname}, ${obj.details.companyEmailAddress}, ${obj.details.password}, ${obj.comapnyAddress}, ${obj.city}, ${obj.zip}, ${obj.conpanySize}, "null", "/photo-1514870262631-55de0332faf6?", "55de0332faf6?");`,


pool.conn
const getAllUsers = (request, response) => {
  let obj = request.body.data;
  pool.query(
    "INSERT INTO companyusers (companyname, email, password, companyaddress, city, zipcode, companysize, industry, companywebsite, logo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);",
    [
      obj.details.companyname,
      obj.details.companyEmailAddress,
      obj.details.password,
      obj.comapnyAddress,
      obj.city,
      obj.zip,
      obj.conpanySize,
      // "null",
      obj.industry,
      obj.companyWebsite,
      obj.uploadLogo,
    ],
    (error, results) => {
      if (error) {
        console.log(error);
        throw error;
      }
      //   console.log("results.row", results.rows);
      console.log(results.fields)
      response.status(200).json(results.rows);
    }
  );
  // console.log(request.body);
  // response.status(200).json("response.body")

  //   next();
};

const getAllUserss = (request, response) => {
  pool.query("SELECT * FROM companyusers", (error, results) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log("results.row", error, results);
    response.status(200).json("results.rows");
  });
  // console.log(request.body);
  // response.status(200).json("response.body")
  // response.status(200).json("results.rows");


  //   next();
};

// const getVehicleDisplayById = (request, response) => {
//     const id = parseInt(request.params.id)

// pool.query('select * from users where vehicle_id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const getVehicleDisplayById = (request, response) => {
//     const id = parseInt(request.params.id)

//     pool.query('select * from vehicles where vehicle_id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

module.exports = {
  // getAllVehicleDisplay,
  // getVehicleDisplayById,
  getAllUsers,
  getAllUserss,
};
