const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  // GET route
router.get('/', (req, res) => {
  console.log(req.user);

  let queryText = `SELECT * FROM performance
  WHERE "day_performing" = 'Friday'`; //will change this to JUST friday

  pool.query(queryText)
  .then(result => {
      res.send(result.rows);
  }) .catch(err => {
      console.log('Errrrrror', err);
      res.sendStatus(500);
  });

});//End GET

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here

});// End POST

// // * Delete an item if it's something the logged in user added
// // */
// router.delete('/:id', (req, res) => {
//  const idToDelete = req.params.id
//  const idUser = req.user.id
//  console.log('This is what we are deleting -->', idToDelete, idUser);

//  //query text needs to combine item id and check user id against the databases user_id
//  let queryText = `
//  DELETE FROM "performance"
//  WHERE "id" = $1 AND "user_id" = $2
//  `;

//  pool.query(queryText, [idToDelete, idUser])
//    .then(respond => {
//      res.send(200);
//    })
//    .catch(error => {
//      console.log('ERROR IN DELETE', error);
//      res.sendStatus(500);
//    })
//  // endpoint functionality
// });


module.exports = router;
