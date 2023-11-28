const db = require('../db');

const getTopMovies = (req, res) => {
  const q = 'SELECT * FROM `topdramas`';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(201).send(data);
  });
};

const getSavedMovies = (req, res) => {
  const q = 'SELECT * FROM `saveddramas`';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(201).send(data);
  });
};

const addMovie = (req, res) => {
  const { userId, data } = req.body;
  const q = 'INSERT INTO `saveddramas`VALUES (?, ?)';
  db.query(q, [userId, [JSON.stringify(data)]], (err, result) => {
    if (err) return res.status(400).json(err);
    return res.status(201).send(result);
  });
};
module.exports = {
  getTopMovies,
  getSavedMovies,
  addMovie,
};