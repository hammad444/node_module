const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id:{ type: DataTypes.STRING,primaryKey: true, allowNull: false },
        email:{ type: DataTypes.STRING, allowNull: false },
        package:{ type: DataTypes.STRING, allowNull: false },
        receipt:{ type: DataTypes.STRING, allowNull: true,defaultValue:""},
        isPaid:{type: DataTypes.STRING,allowNull:false, defaultValue: false},
        expireAt:{type: DataTypes.DATE,allowNull:true,defaultValue:null},
    };

    return sequelize.define('Payment', attributes);
}