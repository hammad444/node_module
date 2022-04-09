
const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Read_Statute:{type: DataTypes.TEXT, allowNull: false},
        Statute_id:{type: DataTypes.TEXT, allowNull: false},
    };

    return sequelize.define('StatuteRead', attributes);
}