
const { Sequelize } = require('sequelize');
const config =require('./config.json')
const mysql=require('mysql2')
module.exports = db = {};
initialize();


async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
     connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize("waqalat_database", "root", "12345678", { host: 'localhost', dialect: 'mysql' });
    try {
      await sequelize.authenticate();
      console.log('waqalatDB Connected successfully......');
    } catch (error) {
      console.error('Unable to connect to the database....:', error);
    }
    // init models and add them to the exported db object
    db.User = require('../models/userModel')(sequelize);
    db.Payment = require('../models/PaymentModel')(sequelize);
    db.Package = require('../models/PackageModel')(sequelize);

    db.Statute = require('../models/statuteModel')(sequelize);
    db.Ordinance = require('../models/ordinanceModel')(sequelize);
    db.StatuteRead = require('../models/statuteReadModel')(sequelize);
    db.Case = require('../models/caseModel')(sequelize);
    db.Citation = require('../models/citationModel')(sequelize);
    db.CaseDes = require('../models/caseDesModel')(sequelize);
    db.Bookmark = require('../models/bookmarkModel')(sequelize);
    db.Article = require('../models/articleModel')(sequelize);
    db.LegalTerm = require('../models/legalTermModel')(sequelize);
    db.Topic = require('../models/topicModel')(sequelize);
    db.Dictionary = require('../models/dictionaryModel')(sequelize);

    db.Code = require('../models/codeModel')(sequelize);
    db.PayAccount = require('../models/payAccountModel')(sequelize);
    db.Client = require('../models/clientModel')(sequelize);
    db.ClientCase = require('../models/clientCaseModel')(sequelize);


    // sync all models with database
    
    await sequelize.sync();
  
}
