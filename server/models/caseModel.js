

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Year:{ type: DataTypes.TEXT, allowNull: false },
        Journal_Name: { type: DataTypes.TEXT, allowNull: false },
        Parties:{type: DataTypes.TEXT, allowNull: false},
        Law_Ref:{ type: DataTypes.TEXT, allowNull: false },
        Case_Ref:{ type: DataTypes.TEXT, allowNull: false },
        Head_Notes:{ type: DataTypes.TEXT, allowNull: false },
        Citation_Court:{ type: DataTypes.TEXT, allowNull: false },
        Citation_id:{ type: DataTypes.TEXT, allowNull: false }
    };

    return sequelize.define('Case', attributes);
}