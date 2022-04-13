
//autotest from method https://swapi.dev/api/people/10



pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
	pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});

pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.height).to.eql("182");
});

pm.test("Response time is less than 242ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(242);
});

