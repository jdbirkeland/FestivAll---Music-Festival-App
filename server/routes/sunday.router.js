const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  // GET route
router.get('/', (req, res) => {
  console.log(req.user);

  let queryText = `SELECT "performance"."name","stage_name", "set_start", "set_finish", "description", "link" FROM performance
  JOIN "day" ON "performance"."day_performing" = "day"."id"
  JOIN "stage" ON "performance"."stage_id" = "stage"."id"
  WHERE "day_performing" = 3;"`; //will change this to JUST Sunday

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
