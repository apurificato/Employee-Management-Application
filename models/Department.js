const client = require('../db/client')
const { DataTypes, Model } = require('sequelize');
const { Employee, Role } = require('../models')

class Department extends Model { }

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
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

module.exports = Department