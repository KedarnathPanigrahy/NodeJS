module.exports = (sequelize, Sequelize) => sequelize.define('notes', {  
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },  
    note: Sequelize.STRING,
    category: Sequelize.STRING
}, { timestamps: false } );

