export class ButtonElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get element() {
    return cy.get(this.selector);
  }

  public click() {
    return this.element.click();
  }
}
