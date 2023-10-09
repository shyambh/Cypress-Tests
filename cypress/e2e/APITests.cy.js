/// <reference types="cypress" />

it.only("Verify accessing the four test endpoints", () => {
  let listUsers = "https://reqres.in/api/users";
  let login = "https://reqres.in/api/login";
  let deleteUser = "https://reqres.in/api/users/2";
  let delayedResponse = "https://reqres.in/api/users?delay=5";

  // Getting all the users
  cy.log("Getting all users.");
  cy.request({
    method: "GET",
    url: listUsers,
  }).then((response) => {
    assert.isTrue(response.isOkStatusCode);
    //Verifying if user count > 0
    expect(response.body.data.length).to.be.above(0);
  });

  // Unsuccessful Login. No email/password provided.
  cy.log("Unsucessful login. No email/password provided.");
  cy.request({
    method: "POST",
    url: login,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.body.error).to.be.eq("Missing email or username");
    expect(response.status).to.be.eq(400);
  });

  // Unsuccessful Login. Invalid user info provided.
  cy.log("Unsucessful login. Invalid user info provided.");
  cy.request({
    method: "POST",
    url: login,
    failOnStatusCode: false,
    body: { email: "whatever@example.com", password: "nothing" },
  }).then((response) => {
    expect(response.body.error).to.be.eq("user not found");
    expect(response.status).to.be.eq(400);
  });

  // Successful Login
  cy.log("Successful login");
  cy.request({
    method: "POST",
    url: login,
    body: { email: "tracey.ramos@reqres.in", password: "nothing" },
  }).then((response) => {
    assert.isTrue(response.isOkStatusCode);
    expect(response.body).to.have.property("token");
  });

  // Delete a user
  cy.log("Deleting a user");
  cy.request({
    method: "DELETE",
    url: deleteUser,
  }).then((response) => {
    expect(response.status).to.be.eq(204);
  });

  // Verifying delayed response. Test will fail since timeout is just 5 seconds.
  cy.log("Verifying delayed response");
  cy.request({
    method: "GET",
    url: delayedResponse,
    timeout: 5000,
  });
});
