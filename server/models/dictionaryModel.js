

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Words:{ type: DataTypes.TEXT, allowNull: false },
        Meaning:{ type: DataTypes.TEXT, allowNull: false }
    };

    return sequelize.define('Dictionary', attributes);
}