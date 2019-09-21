/** Express Server
 * @module server/express
 */

/** 
* @namespace expressServer
*/

/**
 * Module containing middlewares and routes
 * @const
 */
const app = require("../server");

/**
 * HTTP module
 * @const
 */
const http = require("http");

/**
 * Port on which the application runs
 * @const
 */
const port = normalizePort(3000);

/**
 * Setting the port to application
 */
app.set("port", port);

/**
 * Creating HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port.
 */
server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 * @name normalizePort
 * @function
 * @memberof module:server/express~expressServer
 * @inner
 * @param {string} port - Port Value
 */
function normalizePort(val) {

    /**
     * Parsing value to int
     * @const
     */
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

module.exports = server;
