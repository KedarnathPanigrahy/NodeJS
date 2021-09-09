const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'nodejstraining',
  password: 'root'
});
// connection.connect();
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }   
    console.log('connected as id ' + connection.threadId);
  });

//   connection.query('SHOW TABLES', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });

  // connection.query("CREATE TABLE users (id VARCHAR(255), username VARCHAR(255), password VARCHAR(255), registered datetime, last_login datetime)", function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results);
  // });
module.exports = connection;