 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const port = 5000 ; 
 var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root" ,
 database: "st"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE st", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

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

//   var sql ="INSERT INTO student (firstName, LastName , grade ) VALUES ?";
//   var val = [['Francesco', 'Lenahan' , '78']];
//   console.log(arr);
//   con.query(sql ,[val], function (err, result) {
//   if (err) throw err;
//   console.log("insert created");
// });

//   var sql ="SELECT * FROM student ";

//   con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("select created");
  
//   console.log('Data received from Db:\n');
//   console.log(result);

// let pagesize=5;
// app.get('/student', (req, res) =>{
//       let page=req.query.page;
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "*");
//   start=(page-1)*pagesize;
//     end=start+ pagesize;
//     res.send(result.slice(start,end));
//    });

// });

// app.get( "/student/:id", (req, res) =>{
//   let id=req.params.id;
//   var sqlid ="SELECT * FROM student WHERE id="+id;
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "*");
//   con.query(sqlid, function (err, result) {
//   if (err) throw err;
//   console.log("select created\n");
//   console.log(result);
//  let thisId = result.find(i=>i.id==(id*1));
//  console.log(thisId);
//  if(thisId == undefined){
//      res.send(id);
//  }
//  res.send(thisId);
//  });
// });

app.use(bodyParser.json());
app.post( "/student", (req, res) =>{
    let todo = {
          firstName : req.body.firstName,
             lastName :  req.body.lastName ,
            grade:  req.body.grade  
 } ;
      console.log(todo);
          // var l = ['' , " '" +(req.body.firstName)+ " '", (req.body.lastName) , (req.body.gender)];
           var sqlp ="INSERT INTO student VALUES ('13' , '" +req.body.firstName +  " ', '" +req.body.lastName +" ', '" +req.body.grade+ "') ;" ;

           con.query(sqlp, function (err, result) {
           if (err) throw err;
          
           console.log(result);

           console.log(todo);
          //  arr.push(todo);
          //  console.log(arr);
           return res.status(201).send(todo);  
        });
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
