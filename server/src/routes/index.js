const { Router } = require("express");
// const {postFav} = require('../Controllers/fav');

const router = Router();

router.get('/fav', (req, res) => {
    res.send('Lista de usuarios');
  });
  
module.exports = router;