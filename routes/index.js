/** Express router providing user related routes
 * @module user/routes
 */

/**
 * @namespace usersRouter
 */

/**
 * Express router to mount user related functions on.
 * @const
 */
const router = require("express").Router()

/**
 * Factory Methods responsible for manipulating user data
 * @const
 */
const factoryMethods = require("../factory/user")

/**
 * Route validating user's age
 * @name /validate/age
 * @function
 * @memberof module:user/routes~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post("/validate/age", factoryMethods.validateAge)

module.exports = router