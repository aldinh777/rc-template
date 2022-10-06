const { join } = require('path');
const { createServer } = require('http');
const express = require('express');

const app = express();

app.use(express.static(join(__dirname, '../dist')));

const server = createServer(app);

/**
 * start the server at specific
 * @param {number} port
 * @param {string?} host
 */
module.exports.startServer = function (port, host) {
    server.listen(port, host, () => {
        console.log(`Server is listening and waiting: http://${host}:${port}`);
    });
};
