/** Express Server
 * @module server/app
 */

/** 
* @namespace appServer
*/

/**
 * Express is a Node.js web application framework
 * @const
 */
const express = require("express")

const app = express()

/**
 * Recognize the incoming Request Object as a JSON Object.
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {method} json - Middleware
 */
app.use(express.json());

/**
 * Serving Routes
 * @function
 * @name use
 * @memberof module:server/app~appServer
 * @inner
 * @param {string} root - Root Route
 * @param {object} router - Express Router
 */
app.use("/", require("./routes"))

module.exports = app
