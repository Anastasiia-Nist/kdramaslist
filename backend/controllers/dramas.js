const db = require('../db');

const getTopMovies = (req, res) => {
  const q = 'SELECT * FROM `topdramas`';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(201).send(data);
  });
};

const getSavedMovies = (req, res) => {
  const { id } = req.params;
  const q = 'SELECT * FROM `saveddramas` WHERE userId=?';
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(201).send(data);
  });
};

const addMovie = (req, res) => {
  const {
    userId, name, img, country, year, description, duration,
  } = req.body;
  const q = `INSERT INTO saveddramas (userId, name, img, country, year, description, duration ) VALUES ( ${userId}, '${name}' , '${img}' , '${country}' , '${year}' ,' ${description}' , '${duration}' )`;
  db.query(q, (err, result) => {
    if (err) return res.status(400).json(err);
    return res.status(201).send(result);
  });
};
module.exports = {
  getTopMovies,
  getSavedMovies,
  addMovie,
};
