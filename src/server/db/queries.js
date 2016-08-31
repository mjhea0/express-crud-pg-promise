const db = require('./connection');

function getAll(tableName, callback) {
  db.any(`SELECT * FROM ${tableName}`)
  .then((result) => {
    callback(null, result);
  })
  .catch((err) => {
    callback(err);
  });
}

function getSingle(tableName, id, callback) {
  db.any(`SELECT * FROM ${tableName} WHERE id = ${id}`)
  .then((result) => {
    if (result.length) {
      callback(null, result);
    } else {
      callback('That beer doesn\'t exist');
    }
  })
  .catch((err) => {
    callback(err);
  });
}

function add(tableName, obj, callback) {
  db.any(`INSERT INTO beer (name, abv, brand, style) VALUES('${obj.name}', ${obj.abv}, '${obj.brand}', '${obj.style}')`)
  .then((result) => {
    callback(null, 'You added a beer!');
  })
  .catch((err) => {
    callback(err);
  });
}

function updateSingle(tableName, id, field, value, callback) {
  db.any(`UPDATE beer SET ${field} = ${value} WHERE id = ${id} returning id`)
  .then((result) => {
    if (result.length) {
      callback(null, 'You updated a beer!');
    } else {
      callback('That beer doesn\'t exist');
    }
  })
  .catch((err) => {
    callback(err);
  });
}

function deleteSingle(tableName, id, callback) {
  db.any(`DELETE FROM ${tableName} WHERE id=${id} returning id`)
  .then((result) => {
    if (result.length) {
      callback(null, 'You deleted a beer!');
    } else {
      callback('That beer doesn\'t exist');
    }
  })
  .catch((err) => {
    callback(err);
  });
}

module.exports = {
  getAll,
  getSingle,
  add,
  updateSingle,
  deleteSingle
};
