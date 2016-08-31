# Express CRUD with pg-promise

Just a basic Node + Express CRUD app with [pg-promise](pg-promise)

## Getting Started

1. Fork/Clone
1. Install Dependencies
1. Fire up the Postgres server
1. Run `psql -f src/server/db/beers.sql` to set up the database, create a table, and seed the table
1. `gulp`

## Sample Requests

With [HTTPie](http://httpie.org/):

```sh
$ http GET http://localhost:3000/api/v1/beers
$ http GET http://localhost:3000/api/v1/beers/1
$ http POST http://localhost:3000/api/v1/beers name=concentration abv=9 brand="russian river" style="sour porter"
$ http PUT http://localhost:3000/api/v1/beers/2 field=abv value=222
$ http DELETE http://localhost:3000/api/v1/beers/1
```

## Versions

1. [Method 1](https://github.com/mjhea0/express-crud-pg-promise)
  * Pro: Easy to set up and understand
  * Con: Hard to test and scale
