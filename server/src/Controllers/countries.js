const { Country, Activities } = require('../db');
const { Op } = require('sequelize'); // Necesario para hacer búsquedas insensibles a mayúsculas/minúsculas

const getCountries = async () => await Country.findAll();

const getCountry = async (id)=>{
    const countryFound = await Country.findByPk(id,
        {
            include: Activities, // Incluye las actividades turísticas asociadas al país
        }
        );

    if(!countryFound) return {error: 'Country Not Found'}
    return countryFound
};


const getCountryName = async (name)=>{
    const countryFound = await Country.findAll({where: {
        name:
            { [Op.iLike]: `%${name}%` }// Consulta para buscar coincidencias
        }
    });

    if(!countryFound || countryFound.length === 0) return {error: 'Country Not Found By name'}
    return countryFound
};


module.exports = {
    getCountries,
    getCountry,
    getCountryName
};