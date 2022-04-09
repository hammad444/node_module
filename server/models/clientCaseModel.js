

const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        user_id:{ type: DataTypes.STRING, allowNull: false },
        client_id:{ type: DataTypes.STRING, allowNull: false },
        case_number:{ type: DataTypes.STRING, allowNull: false },
        case_title:{ type: DataTypes.STRING, allowNull: false },
        case_date: { type: DataTypes.STRING, allowNull: false },
        hearing_date:{type: DataTypes.STRING, allowNull: false},
        hearing_time:{type: DataTypes.STRING, allowNull: false},
        case_court:{ type: DataTypes.STRING, allowNull: false },
        case_city:{ type: DataTypes.STRING, allowNull: false },
        case_desc:{ type: DataTypes.TEXT, allowNull: false },
        case_notes:{ type: DataTypes.TEXT, allowNull: false },
        case_files:{ type: DataTypes.TEXT, allowNull: false },
        case_close:{ type: DataTypes.STRING, allowNull: false },
    };

    return sequelize.define('ClientCase', attributes);
}