const { Activities,Country, ActivityCountry } = require('../db');
const { Op } = require('sequelize');


const postActivities = async (nombre, dificultad, duracion, temporada, countryIds ) => {
    // const createActivity = await Activities.create({
    const [createActivity, created] = await Activities.findOrCreate({
        where: { nombre: nombre }, // Busca una actividad con el mismo nombre
        defaults: {
                            nombre, 
                            dificultad, 
                            duracion, 
                            temporada
                    },
                });
                
    // })
    if (!created) {
        // throw new Error('La actividad ya existe');
        return { error: 'Country Not Found' };

    }

    const countries = await Country.findAll({ where: { id: { [Op.in]: countryIds } } });

    if (countries.length !== countryIds.length) {
        // throw new Error('Algunos países no existen o tienen IDs incorrectos');
        return { error: 'Algunos países no existen o tienen IDs incorrectos' };

    }

    await createActivity.addCountries(countries);

    return createActivity
    };


module.exports = {
    postActivities
};
