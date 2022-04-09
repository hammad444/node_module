

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        Article_Number:{ type: DataTypes.INTEGER, allowNull: false },
        Title: { type: DataTypes.STRING, allowNull: false },
        Author:{type: DataTypes.STRING, allowNull: false},
        Category:{ type: DataTypes.STRING, allowNull: false },
        Year:{ type: DataTypes.STRING, allowNull: false },
        Article_text:{ type: DataTypes.TEXT, allowNull: false },
    };

    return sequelize.define('Article', attributes);
}