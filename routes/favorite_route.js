var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'rho',
};
var pool = new pg.Pool(config);

//gets a table with the favorites info
router.get('/', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM favorites;', function (err, result) {
        if (err) {
          console.log('Error querying DB', err);
          res.sendStatus(500);
          return;
        }

        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

//allows you to add a new favorites
router.post('/', function (req, res) {
  pool.connect(function (err, client, done) {
    try {
      console.log('Post Req.body: ', req.body);
      if (err) {
        console.log('Error connecting to DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('INSERT INTO favorites (coments, imageurl) VALUES ($1, $2);',
                  [req.body.coments, req.body.imageurl],
                  function (err, result) {
        if (err) {
          console.log('Error querying DB', err);
          res.sendStatus(500);
          return;
        }

        res.sendStatus(200);
      });
    } finally {
      done();
    }
  });
});

//allows you to update coments
router.put('/', function (req, res) {
  var  id = req.body.id;
  var coments = req.body.coments;
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connecting to DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('UPDATE favorites SET coments=$2 WHERE id=$1;',
                  [id, coments],
                  function (err, result) {
        if (err) {
          console.log('Error querying DB', err);
          res.sendStatus(500);
          return;
        }

        res.sendStatus(200);
      });
    } finally {
      done();
    }
  });
});

router.delete('/:id', function (req, res) {
  console.log('delete body',req.params);
  pool.connect(function (err,client,done) {
    if (err) {
      res.sendStatus(500);
      done();
      return;
    }
    // query the database to delete desired row
    client.query('DELETE  FROM favorites WHERE id = $1;',
                  [req.params.id],
                  function (err, result) {
      done();
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
        }

        res.send(result.rows);

      });
    });
  });//end of delete

module.exports = router;
