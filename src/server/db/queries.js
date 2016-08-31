const db = require('./connection');

function getAll(tableName) {
  return db.any(
    `SELECT * FROM ${tableName}`);
}

function getSingle(tableName, id) {
  return db.any(
    `SELECT * FROM ${tableName} WHERE id = ${id}`);
}

function add(tableName, obj) {
  return db.any(`INSERT INTO beer (name, abv, brand, style) VALUES('${obj.name}', ${obj.abv}, '${obj.brand}', '${obj.style}')`);
}

function updateSingle(tableName, id) {
  return db.any(
    `SELECT * FROM ${tableName} WHERE id = ${id}`);
}

function deleteSingle(tableName, id) {
  return db.any(`DELETE FROM ${tableName} WHERE id=${id} returning id`);
}

module.exports = {
  getAll,
  getSingle,
  add,
  updateSingle,
  deleteSingle
};
