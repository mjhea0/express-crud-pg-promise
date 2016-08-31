DROP DATABASE IF EXISTS beers;
CREATE DATABASE beers;

\c beers;

CREATE TABLE beer (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  abv INTEGER,
  brand VARCHAR,
  style VARCHAR
);

INSERT INTO beer (name, abv, brand, style)
  VALUES ('Mark', 20, 'Bernie Sanders', 'Socialist');
  INSERT INTO beer (name, abv, brand, style)
    VALUES ('Nitro Milk Stout', 12, 'Left Hand', 'Stout');
