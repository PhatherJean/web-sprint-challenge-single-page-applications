describe("Pizza order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  const order = () => cy.get(".orderBtn");
  const name = () => cy.get('input[name="name"]');
  const size = () => cy.get(".pick_size");
  const special = () => cy.get('input[name="special"]');
  it("Sanity test make sure it work", () => {
    expect(1 + 3).to.equal(4);
  });

  it("Click place order button", () => {
    order().click();
  });

  it("Able to add texts inputs", () => {
    order().click();
    name().should("have.value", "").type("pat").should("have.value", "pat");
    special()
      .should("have.value", "")
      .type(
        "I want this to be supper cheesey dont be stengy with the cheese now and lod it up with pineapple"
      )
      .should(
        "have.value",
        "I want this to be supper cheesey dont be stengy with the cheese now and lod it up with pineapple"
      )
      .clear()
      .should("have.value", "")
      .type(
        "I want this to be supper cheesey dont be stengy with the cheese now and lod it up with pineapple"
      );
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').uncheck();
    cy.get('[type="checkbox"]').check();
    size().select("small").should("have.value", "small");
    cy.get(".send").click();
    cy.get(".summary0").click();
  });
});
