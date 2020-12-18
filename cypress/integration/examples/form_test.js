describe("Pizza order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  const order = () => cy.get(".orderBtn");
  const name = () => cy.get('input[name="name"]');

  it("Sanity test make sure it work", () => {
    expect(1 + 3).to.equal(4);
  });

  it("Click place order button", () => {
    order().click();
  });

  it("Able to add texts inputs", () => {
    order().click();
    name().should("have.value", "").type("pat").should("have.value", "pat");
  });
});
