
const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Ordinance_Name:{ type: DataTypes.TEXT, allowNull: false },
    };

    return sequelize.define('Ordinance', attributes);
}