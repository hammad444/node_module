

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Case_Desc:{ type: DataTypes.TEXT, allowNull: false },
        Citation_id:{ type: DataTypes.TEXT, allowNull: false }
    };

    return sequelize.define('CaseDes', attributes);
}