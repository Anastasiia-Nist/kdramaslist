const dramasRouter = require('express').Router();

const { getTopMovies, getSavedMovies, addMovie } = require('../controllers/dramas');

dramasRouter.get('/top', getTopMovies);
dramasRouter.get('/saved/:id', getSavedMovies);
dramasRouter.post('/', addMovie);

module.exports = dramasRouter;
