const express = require('express');
const cors = require('cors');
const config = require('./config');
const { audioRouter } = require('./audio-router');
const { errorHandler, refererWhitelister } = require('./middleware');

const server = express();

server.use(cors(config.whiteListedOrigins))
server.use('/audio', refererWhitelister, audioRouter);
server.use(errorHandler)

module.exports = { server };