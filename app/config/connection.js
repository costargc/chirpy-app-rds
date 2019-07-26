// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var base64 = require('base-64');
var utf8 = require('utf8');

// Set up our connection information
var connection = mysql.createConnection({
  host: grabmyhost(),
  port: 3306,
  user: grabmyuser(),
  password: grabmypass(),
  database: "chirpy"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

function grabmyhost(){
  return base64.decode("dWF0LXJkcy1kYXRhYmFzZS5jNmJhdW94cnc4ZmwudXMtZWFzdC0xLnJkcy5hbWF6b25hd3MuY29t");
}

function grabmyuser(){
  return base64.decode("ZW5jcnlwdGVkX3VzZXI=");
}

function grabmypass(){
  return base64.decode("cGFzc3dvcmQ=");
}