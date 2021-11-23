const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  // GET route
router.get('/', (req, res) => {
  console.log(req.user);

  let queryText = `SELECT "performance2"."name", "day"."day", "stage"."stage_name", "set_start" ,  "set_finish", "description", "link" FROM performance2
  JOIN "day" ON "performance2"."day_performing" = "day"."id"
  JOIN "stage" ON "performance2"."stage_id" = "stage"."id"
  WHERE "day_performing" = 3;`; //will change this to JUST Sunday

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
  console.log('sunday POST');
  console.log('user', req.user);

  const sqlText = `
  INSERT INTO "performance2" ("name", "day_performing","stage_id","set_start","set_finish","description","link","user_id")
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

// * Delete an item if it's something the logged in user added
// */
router.delete('/:id', (req, res) => {
 const idToDelete = req.params.id
 const idUser = req.user.id
 console.log('This is what we are deleting -->', idToDelete, idUser);

 //query text needs to combine item id and check user id against the databases user_id
 let queryText = `
 DELETE FROM "performance2"
 WHERE "id" = $1 AND "user_id" = $2
 `;

 pool.query(queryText, [idToDelete, idUser])
   .then(respond => {
     res.send(200);
   })
   .catch(error => {
     console.log('ERROR IN DELETE', error);
     res.sendStatus(500);
   })
 // endpoint functionality
});

router.put('/:id', (req,res) => {
  const idToUpdate = req.params.id
  console.log('This is what is being Updated', idToUpdate);
  console.log('this is req.params', req.params);

  let queryText = `UPDATE "performance2"
  SET "name" = $1, "day_performing" = $2,"stage_id" = $3,"set_start" = $4,"set_finish" = $5,"description" = $6,"link" = $7 
  WHERE "id" = $8;`;
  let values = [req.body.name,req.body.day_performing,req.body.stage_id,req.body.set_start,req.body.set_finish,req.body.description,req.body.link, idToUpdate]
  pool.query(queryText,values)
  .then(respond => {
    res.send(200);
  }).catch(err => {
    console.log('Errrrrooorrrr in UPDATE', err);
    res.sendStatus(500);
  })
})

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;
