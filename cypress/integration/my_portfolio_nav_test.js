describe("My First Test", function() {
  it("Visit my portfolio", function() {
    cy.visit("http://localhost:3000/");
  });
  it("Click an element", function() {
    cy.get(".mdl-navigation")
      .contains("Resume")
      .click();
  });
  it("Click an element", function() {
    cy.get(".mdl-navigation")
      .contains("Projects")
      .click();
  });

  it('clicks the link "myPortfolio"', function() {
    cy.contains("myPortfolio").click();
  });

  it("Going back to landing-page", function() {
    cy.url().should("include", "http://localhost:3000");
  });
});
