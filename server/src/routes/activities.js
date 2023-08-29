const { Router } = require("express");
const {postActivities } = require('../Controllers/activities');

const CountriesRouter = Router();

CountriesRouter.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada, countryIds } = req.body;

    try {
        if (!nombre || !dificultad || !duracion|| !temporada || !countryIds) throw Error('Me falta info rey!')
        else {
            const newActivity = await postActivities(nombre, dificultad, duracion, temporada, countryIds)
            res.status(200).json(newActivity)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
});

CountriesRouter.get('/', async (req, res) => {
    res.status(200).json("iji")
});

module.exports = CountriesRouter;