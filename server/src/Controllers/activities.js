const { Activities, Country } = require('../db');
const { Op } = require('sequelize');

const getActivities = async () => await Activities.findAll({
    include: [
        {
            model: Country,
            attributes: ['id', 'name', 'continent'], 
        },
    ],
});

const postActivities = async (nombre, dificultad, duracion, temporada, countryIds) => {
    // const createActivity = await Activities.create({
    const [createActivity, created] = await Activities.findOrCreate({
        where: { nombre: nombre },
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
        return { error: 'La actividad ya existe' };

    }

    const countries = await Country.findAll({ where: { id: { [Op.in]: countryIds } } });

    if (countries.length !== countryIds.length) {
        return { error: 'Algunos países no existen o tienen IDs incorrectos' };

    }

    await createActivity.addCountries(countries);

    return createActivity
};


module.exports = {
    postActivities,
    getActivities
};
