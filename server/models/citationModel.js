
const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Year:{ type: DataTypes.TEXT, allowNull: false },
        Journal_Ref:{ type: DataTypes.TEXT, allowNull: false },
        Journal_Name:{ type: DataTypes.TEXT, allowNull: false },
        Parties:{type: DataTypes.TEXT, allowNull: false },
        Judge:{type: DataTypes.TEXT, allowNull: false },
        Lawyer:{type: DataTypes.TEXT, allowNull: false },
        Citation_Court:{type: DataTypes.TEXT, allowNull: false },
        Citation_id:{type: DataTypes.TEXT, allowNull: false },
    };
    return sequelize.define('Citation', attributes);
}