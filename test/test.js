var Lab = require("lab"); // load Lab module
var lab = exports.lab = Lab.script(); //export test script
var Code = require("code"); //assertion library
var server = require("../src/index");

lab.experiment("Basic HTTP Tests", function () {
    lab.before({
        timeout: 10000
    }, (done) => {
        done();
    });
    // tests
    lab.test("GET /v1/feeds (endpoint test)", function (done) {
        var options = {
            method: "GET",
            url: "/v1/feeds"
        };
        // server.inject lets you simulate an http request
        server.inject(options, function (response) {
            //console.log("Session: %s" + response)
            Code.expect(response.statusCode).to.equal(200); //  Expect http response status code to be 200 ("Ok")
            Code.expect(response.result.data).to.have.length(5); // Expect result to be "Hello Timmy!" (12 chars long)
            server.stop(done); // done() callback is required to end the test.
        });
    });
});