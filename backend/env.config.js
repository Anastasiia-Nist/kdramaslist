const dotenv = require('dotenv');

dotenv.config();

const {
  SERVER_PORT = 3088,
  SECRET_KEY = 'JBsjS37s8&LJJB#Ls',
  NODE_ENV = 'development',
} = process.env;

module.exports = {
  SERVER_PORT,
  SECRET_KEY,
  NODE_ENV,
};
