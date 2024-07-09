export class ButtonElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public get element(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector);
  }

  public click(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.element.click();
  }
}
