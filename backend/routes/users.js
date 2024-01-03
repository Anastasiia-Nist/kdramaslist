const usersRouter = require('express').Router();

const { createUser, login, logout } = require('../controllers/users');

usersRouter.post('/signup', createUser);
usersRouter.post('/signin', login);
usersRouter.post('/', logout);

module.exports = usersRouter;
