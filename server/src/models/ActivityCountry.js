const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('ActivityCountry', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1,
        },
        activityId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Activities',
                key: 'id',
            },
        },
        countryId: {
            type: DataTypes.STRING(3),
            allowNull: false,
            references: {
                model: 'Country',
                key: 'id',
            },
        },
    });
};