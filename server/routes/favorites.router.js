const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,} = require('../modules/authentication-middleware');

  // GET route
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user);

  let queryText = `SELECT "performance"."name", "day"."day", "stage"."stage_name", "set_start",  "set_finish" , "description", "link", "performance"."id" FROM performance
  JOIN "day" ON "performance"."day_performing" = "day"."id"
  JOIN "stage" ON "performance"."stage_id" = "stage"."id"
  WHERE "day_performing" = 1 and "stage_id" =3;`; //will change this to JUST Favorites

  pool.query(queryText)
  .then(result => {
      res.send(result.rows);
  }) .catch(err => {
      console.log('Errrrrror', err);
      res.sendStatus(500);
  });

});//End Get

router.post('/', (req, res) => {
  // POST route code here
  console.log('favorite POST');
  console.log('user', req.user);

  const sqlText = `
  INSERT INTO "performance" ("name", "day_performing","stage_id","set_start","set_finish","description","link","user_id")
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8);`

  const userID = req.user.id
  console.log(userID);
  const values = [req.body.name, req.body.day_performing, req.body.stage_id, req.body.set_start,req.body.set_finish, req.body.description, req.body.link, userID]

  pool
    .query(sqlText, values)
    .then(result => {
      res.sendStatus(201);
      
    }) .catch(err => {
      console.log('error NOW', err);
      res.sendStatus(500);
    })
});// End POST

module.exports = router;
