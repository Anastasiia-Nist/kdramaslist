const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const parser = require('./parser');
const routes = require('./routes');
const { SERVER_PORT } = require('./env.config');

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
    ],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use('/api', routes);
// парсинг сайта и передача данных (топ сериалов) в бд.
// parser();
app.listen(SERVER_PORT, () => {
  console.log(`App listening on port ${SERVER_PORT}`);
});
