// required .env
require('dotenv').config();
// set db 
const {DB_NAME, DB_USERNAME, DB_HOSTNAME, DB_PASSWORD} = process.env
module.exports = {
  "development": {
    "username":DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username":DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username":DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  }
}
