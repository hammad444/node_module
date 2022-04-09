const { DataTypes } = require('sequelize');

module.exports = model;


function model(sequelize) {
    const attributes = {
        id:{type: DataTypes.STRING,primaryKey: true,allowNull:false},
        picture:{type: DataTypes.STRING,allowNull:false, defaultValue: false},
        isAdmin:{type: DataTypes.BOOLEAN,allowNull:false, defaultValue: false},
        criteria:{ type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        contact:{ type: DataTypes.STRING, allowNull: false },
        address:{ type: DataTypes.STRING, allowNull: false },
        city:{ type: DataTypes.STRING, allowNull: false },
        speciality:{ type: DataTypes.STRING, allowNull: false },
        newsLatter:{type: DataTypes.BOOLEAN,allowNull:false, defaultValue: false},
        terms:{type: DataTypes.BOOLEAN,allowNull:false},
        macAddress:{ type: DataTypes.JSON, allowNull: false},
        university:{ type: DataTypes.STRING, allowNull: false },
        intake:{ type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}