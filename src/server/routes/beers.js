const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

// get ALL beers
router.get('/', (req, res, next) => {
  queries.getAll('beer', (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});

// get a SINGLE beer
router.get('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
  queries.getSingle('beer', beerID, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
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
  queries.add('beer', newBeer, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});

// update a SINGLE beer
router.put('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
  const field = req.body.field;
  const value = req.body.value;
  queries.updateSingle(
    'beer', beerID, field, value, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});

// delete a SINGLE beer
router.delete('/:id', (req, res, next) => {
  const beerID = parseInt(req.params.id);
  queries.deleteSingle('beer', beerID, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
