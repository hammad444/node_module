
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        user_name:{type: DataTypes.STRING,allowNull:false},
        account_name:{ type: DataTypes.STRING, allowNull: false },
        account_number:{ type: DataTypes.STRING, allowNull: false },
        account_type:{ type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('PayAccount', attributes);
}