const { Router } = require("express");
const {postFav} = require('../Controllers/fav');

const router = Router();

router.get('/fav', async (req, res) => {
    // res.send('Lista de usuarios');
    const allUsers = await postFav();
    res.status(200).json(allUsers)
  });

//   usersRouter.get('/', async (req, res) => {
//     const { name } = req.query;

//     if (name) {
//         const userFind = await getUserByName(name);

//         if (userFind.error) return res.status(404).json(userFind)
//         return res.status(200).json(userFind)
//     } else {
//         const allUsers = await getAllUsers();

//         res.status(200).json(allUsers)
//     }
// });


module.exports = router;