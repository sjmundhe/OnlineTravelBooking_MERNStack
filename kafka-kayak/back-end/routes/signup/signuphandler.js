var path = require('path');
var express = require('express');
var signuphandler = express.Router();
var mysql      = require('mysql');
//var bcrypt= require('bcrypt');

/*
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'kayak'
});


signuphandler.post('/logout', function(req,res) {

});

signuphandler.post('/loginUser', function(req, res) {
  const saltRounds = 10;
  var salt=bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash);
  pool.getConnection(function(err, connection) {
    connection.query("select password from users where emailId='"+req.body.email+"'", function (error, results, fields) {
      connection.release();
      if (results.length>=1){
        bcrypt.compare(req.body.password,results[0].password, function(err, res1) {
          if(res1==true){
          res.status(201).send({status:201,msg:"Password is right"});
          }
          else{
            res.status(400).send({status:400,msg:"Password is wrong"})
          }
        });


      }
      else{
      res.status(404).send({msg:"Failed"});
    }

    });
  });
});

signuphandler.post('/registerUser',function(req,res){
  pool.getConnection(function(err, connection) {
    connection.query("select emailId from users where emailId='"+req.body.email+"'", function (error, results, fields) {
      connection.release();
      if (results.length>=1){
        res.status(401).send({status:401,msg:"User with this email id already exists"});
      }
      else{

        const saltRounds = 10;
        var salt=bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);

        console.log(hash);
        pool.getConnection(function(err, connection) {
      console.log("insert into users (firstname,lastname,emailId,password) values ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+hash+"')");
          connection.query("insert into users (firstName,lastName,emailId,password) values ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+hash+"')", function (error, results, fields) {
            connection.release();
            if (error){
              res.status(400).send({status:400,message:"Failed to register"});
            }
            else{
            res.status(201).send({status:201,msg:"User is successfully registered"});
          }

          });
        });
      }

    });






});

});

*/

module.exports = signuphandler;