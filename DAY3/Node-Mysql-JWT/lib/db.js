const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '151.117.26.72',
  user: 'ilistser',
  database: 'ilisn',
  password: '1L1stPassw0rd'
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








































// const connection = mysql.createConnection({
//   host: '151.117.206.72',
//   user: 'ilistenuser',
//   database: 'ilisten',
//   password: '1L1st3nPassw0rd'
// });