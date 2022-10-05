const { join } = require('path');
const { createServer } = require('http');
const express = require('express');

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '777';

app.use(express.static(join(__dirname, '../dist')));

const server = createServer(app);

module.exports.startServer = function () {
    server.listen(PORT, HOST, () => {
        console.log(`Server is listening and waiting: http://${HOST}:${PORT}`);
    });
};
