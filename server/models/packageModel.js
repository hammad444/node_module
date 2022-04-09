const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        // id:{ type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        package:{ type: DataTypes.STRING, allowNull: false },
        duration: { type: DataTypes.STRING, allowNull: false },
        fee:{ type: DataTypes.INTEGER, allowNull: false },
        registration:{type: DataTypes.INTEGER,allowNull:false},
        total:{type: DataTypes.INTEGER, allowNull: false},
    };

    return sequelize.define('Package', attributes);
}