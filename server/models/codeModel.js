

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        email:{ type: DataTypes.STRING, allowNull: false },
        code: { type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('Code', attributes);
}