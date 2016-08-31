const express = require('express');
const router = express.Router();

const db = require('../db/connection');

// get ALL beers
router.get('/', (req, res, next) => {
  db.any('SELECT * FROM beer')
  .then((beers) => {
    res.send(beers);
  })
  .catch((error) => {
    next(error);
  });
});

// get a SINGLE beer
router.get('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
  db.any(`SELECT * FROM beer WHERE id = ${beerID}`)
    .then((beer) => {
      if (beer.length) {
        res.send(beer[0]);
      } else {
        res.status(404).send({
          status: 'error',
          message: 'That beer doesn\'t exist'
        });
      }
    })
    .catch((error) => {
      next(error);
    });
});

// add a beer
router.post('/', (req, res, next) => {
  const newBeer = {
    name: req.body.name,
    abv: parseInt(req.body.abv),
    brand: req.body.brand,
    style: req.body.style
  };
  db.any(`INSERT INTO beer (name, abv, brand, style) VALUES('${newBeer.name}', ${newBeer.abv}, '${newBeer.brand}', '${newBeer.style}')`)
  .then((beers) => {
    res.send('You added a beer!');
  })
  .catch((error) => {
    next(error);
  });
});

router.put('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
  const field = req.body.field;
  const value = req.body.value;
  db.any(`UPDATE beer SET ${field} = ${value} WHERE id = ${beerID} returning id`)
  .then((beer) => {
    if (!beer.length) {
      res.status(404).send({
        status: 'error',
        message: 'That beer doesn\'t exist'
      });
    } else {
      res.send('You updated a beer!');
    }
  })
  .catch((error) => {
    next(error);
  });
});

router.delete('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
    db.any(`DELETE FROM beer WHERE id=${beerID} returning id`)
    .then((beer) => {
      if (!beer.length) {
        res.status(404).send({
          status: 'error',
          message: 'That beer doesn\'t exist'
        });
      } else {
        res.send('You deleted a beer!');
      }
    })
    .catch((error) => {
      next(error);
    });
});


module.exports = router;
