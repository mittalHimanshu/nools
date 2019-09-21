/** User factory
 * @module user/factory
 */

/** 
* @namespace userFactory
*/

/**
 * Nools is a rete based rules engine written entirely in javascript.
 * @const
 */
const nools = require('nools');

/**
 * This is a container for rules that will be executed, we can think of it as a rule book.
 * @const
 */
const flow = nools.compile(require.resolve('../rules/user/index.nools'));

/**
 * An object/item inserted into a session that the rule’s constraints match against.
 * @const
 */
const User = flow.getDefined('User');

/**
 * Controller method to validate age of the user
 * @name validateAge
 * @function
 * @memberof module:user/factory~userFactory
 * @inner
 * @param {object} request - Request Object
 * @param {object} response - Response Object
 */
module.exports.validateAge = (request, response) => {

    /**
     * This is an “instance” of a flow used to match facts.
     * @const
     */
    const session = flow.getSession(new User(request.body));

    session
        .on("return-result", result => {
            response.status(200).json({ result })
        })
        .matchUntilHalt()
        .then(() => { session.dispose() })

}