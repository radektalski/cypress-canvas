export class TextElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get element() {
    return cy.get(this.selector);
  }

  public shouldContainsText(value: string) {
    return this.element.should("contains.text", value);
  }
}
