const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  // GET route
router.get('/', (req, res) => {
  console.log(req.user);

  let queryText = `SELECT * FROM "performance"`; //will change this to JUST friday

  pool.query(queryText)
  .then(result => {
      res.send(result.rows);
  }) .catch(err => {
      console.log('Errrrrror', err);
      res.sendStatus(500);
  });

});//End Get

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
