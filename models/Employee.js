const client = require('../db/client')
const { DataTypes, Model } = require('sequelize');
const { Department, Role } = require('../models')

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // employee_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // FOREIGN KEY REFERENCE? manager id
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

module.exports = Employee