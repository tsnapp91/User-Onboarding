describe("lets go form testing", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000`);
  });

  const usernameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const inputPassword = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get("input[type=submit]");

  it("sanity check", () => {
    expect(1 + 2).to.equal(3);
  });

  it("checking to make sure poper elements are showing", () => {
    usernameInput().should("exist");
    emailInput().should("exist");
    inputPassword().should("exist");
    tosInput().should("exist");
    submitBtn().should("exist");
  });

  it("can type in the inputs and checkbox", () => {
    usernameInput().type("tsnapp91").should("have.value", "tsnapp91");
    emailInput()
      .type("traviswsnapp@outlook.com")
      .should("have.value", "traviswsnapp@outlook.com");
    inputPassword().type("12345678").should("have.value", "12345678");
    tosInput().click();
  });
});
