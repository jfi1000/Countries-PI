const { Router } = require("express");
const {postActivities, getActivities } = require('../Controllers/activities');

const CountriesRouter = Router();

CountriesRouter.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada, countryIds } = req.body;

    try {
        if (!nombre || !dificultad || !duracion|| !temporada || !countryIds) throw Error('Me falta info rey!')
        else {
            const newActivity = await postActivities(nombre, dificultad, duracion, temporada, countryIds)
            if(newActivity.error) throw Error(newActivity.error)

            res.status(200).json(newActivity)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
});

CountriesRouter.get('/', async (req, res) => {
    try {
            const allActivities = await getActivities();
            res.status(200).json(allActivities)        
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});


module.exports = CountriesRouter;