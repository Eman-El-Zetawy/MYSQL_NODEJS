 
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const port = 5000 ; 
 var arr =[]; 
app.use(bodyParser.json());
app.post("/arr", (req, res) =>{
   
    let todo = {
             first_name: req.body.first_name,
             last_name: req.body.last_name ,
             gender: req.body.gender 
           }
           let s= [req.body.first_name, req.body.last_name ,req.body.gender ];
           console.log(s);
           console.log(todo );
           arr.push(todo);
           console.log(arr);
           return res.status(201).send(todo);  
        });






 
 var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234" ,
  database: "st"
});




con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   con.query("CREATE DATABASE st", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

//   var sql ="CREATE TABLE student (id INT UNSIGNED NOT NULL AUTO_INCREMENT , firstName VARCHAR(255) NOT NULL , lastName VARCHAR(255) NOT NULL  , grade INT UNSIGNED , PRIMARY KEY (`id`) ) ";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });

//   var sql ="INSERT INTO student (firstName, LastName , grade ) VALUES ('Francesco', 'Lenahan' , '78')";
//   con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("insert created");
// });

  var sql ="INSERT INTO student (firstName, LastName , grade ) VALUES ?";
  var val = [['Francesco', 'Lenahan' , '78']];
  console.log(arr);
  con.query(sql ,[val], function (err, result) {
  if (err) throw err;
  console.log("insert created");
});


});



app.listen(port);





//   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });



