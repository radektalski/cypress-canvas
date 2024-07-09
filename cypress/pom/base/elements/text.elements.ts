export class TextElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public get element(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector);
  }

  public shouldContainsText(value: string): void {
    this.element.should("contains.text", value);
  }
}
