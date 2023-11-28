const router = require('express').Router();
const topDramasRouter = require('./dramas');

router.use('/dramas', topDramasRouter);

module.exports = router;
