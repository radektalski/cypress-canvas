export class InputElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public get element() {
    return cy.get(this.selector);
  }

  public type(value: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.element.clear().type(value);
  }

  public shouldHaveValue(value: string): void {
    cy.get("input").should("have.value", value);
  }
}
