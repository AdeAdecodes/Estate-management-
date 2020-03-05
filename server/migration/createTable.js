import query from './index';


const queryString = `
CREATE TABLE IF NOT EXISTS contact(
  ID SERIAL PRIMARY KEY,      
  Name VARCHAR(128) NOT NULL,
  Email VARCHAR(128) UNIQUE NOT NULL,
  Message VARCHAR(128) NOT NULL,
  Status VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,      
  firstName VARCHAR(128) NOT NULL,
  lastName VARCHAR(128) NOT NULL,
  phoneNumber VARCHAR(128) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  password VARCHAR(128) NOT NULL,
  registered TIMESTAMP,
  status VARCHAR(128) NOT NULL,
  isAdmin BOOLEAN NOT NULL
);
CREATE TABLE IF NOT EXISTS blog(
  id SERIAL PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  image TEXT NOT NULL,
  first TEXT NOT NULL,
  second TEXT NOT NULL,
  QUOTE TEXT NOT NULL,
  third TEXT NOT NULL,
  fourth TEXT NOT NULL,
  registered TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  postedUser VARCHAR(128) NOT NULL,
  status VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS property(
  id SERIAL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  city VARCHAR(300) NOT NULL,
  state VARCHAR(300) NOT NULL,
  firstimage VARCHAR(300) NOT NULL,
  secondimage VARCHAR(300),
  thirdimage VARCHAR(300),
  fourthimage VARCHAR(300),
  video VARCHAR(300),
  description TEXT NOT NULL,
  type TEXT NOT NULL,
  feature VARCHAR(300) NOT NULL,
  amount NUMERIC (5, 2) NOT NULL,
  Bedrooms INTEGER,
  age INTEGER,
  Bathrooms INTEGER,
  size INTEGER,
  carpark INTEGER,
  registered TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  postedUser VARCHAR(128) NOT NULL,
  status VARCHAR(128) NOT NULL
)`;
query(queryString);
