const client = require('../db/client')
const { DataTypes, Model } = require('sequelize');
const { Department, Employee } = require('../models')

class Role extends Model { }

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
// Don't forget FOREIGN KEY REFERENCE, since above is a Foreign Key (not primary)
    },
    {
        // sequelize: client,
        modelName: 'department',
        freezeTableName: true
        //timestamps: false
    }
)

// Department.hasMany(Employee)
// Employee.belongsTo(Department)
// Role.belongsTo(Employee)

module.exports = Role