

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Topics:{ type: DataTypes.TEXT, allowNull: false },
        Statute: { type: DataTypes.TEXT, allowNull: false },
    };

    return sequelize.define('Topic', attributes);
}