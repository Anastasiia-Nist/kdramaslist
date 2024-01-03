const router = require('express').Router();
const dramasRouter = require('./dramas');
const usersRouter = require('./users');

router.use('/dramas', dramasRouter);
router.use('/', usersRouter);

module.exports = router;
