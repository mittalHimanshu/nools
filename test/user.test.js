const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../bin/www");
const should = chai.should();
chai.use(chaiHttp);

/**
 * Age Validation Tests
 * @name Validate_Age
 * @function
 * @inner
 * @param {string} Validate_Age - Name of test group
 * @param {callback} middleware - function with done as a param
 */
describe("Validate Age", () => {

    /**
     * Check if age is less than 32
     * @function
     * @inner
     * @param {string} description - string explaining what test should do
     * @param {callback} middleware - function with done as a param
     */
    it("it should check if age is less than 32", done => {

        let user = { age: 31 }

        chai
            .request(server)
            .post("/validate/age")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("result").eql(`User's age ${user.age} is less than or equal to 32`);
                done();
            });
    })

    /**
     * Check if age is equal to 32
     * @function
     * @inner
     * @param {string} description - string explaining what test should do
     * @param {callback} middleware - function with done as a param
     */
    it("it should check if age is less than 32", done => {

        let user = { age: 32 }

        chai
            .request(server)
            .post("/validate/age")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("result").eql(`User's age ${user.age} is less than or equal to 32`);
                done();
            });
    })


    /**
     * Check if age is greter than 32 and less than 40 (exclusive)
     * @function
     * @inner
     * @param {string} description - string explaining what test should do
     * @param {callback} middleware - function with done as a param
     */
    it("it should check if age is greater than 32 and less than 40 (exclusive)", done => {

        let user = { age: 35 }

        chai
            .request(server)
            .post("/validate/age")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("result").eql(`User's age ${user.age} is greater than 32 and less than 40`);
                done();
            });
    })

    /**
     * Default Case if none of the above matches
     * @function
     * @inner
     * @param {string} description - string explaining what test should do
     * @param {callback} middleware - function with done as a param
     */
    it("it should check default case", done => {

        let user = { age: 99 }

        chai
            .request(server)
            .post("/validate/age")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("result").eql(`User's age is ${user.age}`);
                done();
            });
    })

})