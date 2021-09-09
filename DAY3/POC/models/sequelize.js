const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully');
  })
  .catch((err) => {
    console.log('Unable to establish Database connection', err);
  });

const notesModel = require('./notes.model');
const Notes = notesModel(sequelize, Sequelize);

// In development, you may need to drop existing tables and re-sync database; use force: true
/*   sequelize
    .sync({force: true})
    .then(()=>{
        console.log("Dropping existing tables if any and re-syncing DB");
    });  */
// This Sequelize Model represents notes table in MySQL database. These columns will be generated automatically: id, note, category, createdAt, updatedAt.
sequelize
  .sync()
  .then(() => {
    console.log('Using existing tables in DB');
  }); 

module.exports = Notes;