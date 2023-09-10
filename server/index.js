const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
//código jf
const { Country } = require('./src/db.js');
const cargarPaises = async () => {
  // Cargar países desde la API y guardar en la base de datos
  const URL_API = 'http://localhost:5000/countries';
  try {
    const response = await axios.get(URL_API);
    const countriesData = response.data;

    const paisesPromises = countriesData.map(async (paisData) => {
      const nuevoPais = {
        id: paisData.cca3,
        name: paisData.name.common,
        flagImage: paisData.flags.png,
        // continent: paisData.continents[0],
        continent: paisData.continents && paisData.continents[0],
        // capital: paisData.capital[0],
        capital: paisData.capital && paisData.capital[0] ? paisData.capital[0] : 'Unknown', // Usar 'Unknown' si es null
        subregion: paisData.subregion,
        area: paisData.area,
        population: paisData.population
      };
      await Country.create(nuevoPais);
      
    });
    
    await Promise.all(paisesPromises); // Espera a que todas las inserciones se completen

    console.log('Datos cargados exitosamente en la base de datos');
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};


  conn.sync({ force: true }).then(async () => {

    await cargarPaises(); // Cargar los países al levantar el servidor

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
    }).catch(error => console.error(error))
