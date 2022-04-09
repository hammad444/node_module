
const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Legal_Terms:{ type: DataTypes.TEXT, allowNull: false },
    };

    return sequelize.define('LegalTerm', attributes);
}