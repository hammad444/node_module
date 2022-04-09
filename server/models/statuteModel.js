
const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Statute_Name:{ type: DataTypes.TEXT, allowNull: false },
        Section_Name: { type: DataTypes.TEXT, allowNull: false },
        Ordinance_Name:{ type: DataTypes.TEXT, allowNull: false },
        Definition:{type: DataTypes.TEXT, allowNull: false},
        Case_Ref:{type: DataTypes.TEXT, allowNull: false},
        Statute_id:{type: DataTypes.TEXT, allowNull: false},
    };
    return sequelize.define('Statute', attributes);
}