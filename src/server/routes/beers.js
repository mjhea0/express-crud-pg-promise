const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

// get ALL beers
router.get('/', (req, res, next) => {
  queries.getAll('beer')
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
  queries.getSingle('beer', beerID)
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
  queries.add('beer', newBeer)
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
  queries.updateSingle('beer', beerID, field, value)
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
    queries.deleteSingle('beer', beerID)
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
