const express = require('express');
const router = express.Router();

const ViewsRouter = require('./ViewsRouter');
const AuthRouter = require('./AuthRouter');
const UrlsRouter = require('./UrlsRouter');

router.use(ViewsRouter);
router.use(AuthRouter);
router.use(UrlsRouter);

module.exports = router;
