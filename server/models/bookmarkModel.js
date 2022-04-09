

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        User_id:{ type: DataTypes.STRING, allowNull: false },
        Citation_ids:{ type: DataTypes.JSON, allowNull: false },
    };

    return sequelize.define('Bookmark', attributes);
}