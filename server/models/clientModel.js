
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        user_id:{type: DataTypes.STRING,allowNull:false},
        client_id:{ type: DataTypes.STRING, allowNull: false },
        client_name:{ type: DataTypes.STRING, allowNull: false },
        client_contact: { type: DataTypes.STRING, allowNull: false },
        client_address:{type: DataTypes.STRING, allowNull: false},
        client_city:{type: DataTypes.STRING, allowNull: false},
        client_from:{ type: DataTypes.DATE, allowNull: false },
    };

    return sequelize.define('Client', attributes);
}