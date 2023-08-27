const { Country } = require('../db');

// const postFav = (req, res)=>{
//     return ("myFavorites");
// };
const postFav = async () => await Country.findAll();

module.exports = {
    postFav
};