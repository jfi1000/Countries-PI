const { Router } = require("express");
const {getCountries, getCountry, getCountryName } = require('../Controllers/countries');

const CountriesRouter = Router();

CountriesRouter.get('/', async (req, res) => {
    const allUsers = await getCountries();
    res.status(200).json(allUsers)
});

CountriesRouter.get('/name',async (req, res)=>{
    try {
        const nameQuery = req.query.name; // Obtener el nombre por la url 
        const countryQuery = await getCountryName(nameQuery);

        if(countryQuery.notFound) throw Error(countryQuery.notFound)
        return res.status(200).json(countryQuery)
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
});

CountriesRouter.get('/:id',async (req, res)=>{
    try {
        const {id} = req.params;
        const country = await getCountry(id);

        if(country.notFound) throw Error(country.notFound)
        return res.status(200).json(country)
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
});


module.exports = CountriesRouter;