export class InputElement {
  readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get element() {
    return cy.get(this.selector);
  }

  public type(value: string) {
    return this.element.clear().type(value)
  } 

  public shouldHaveValue(value: string) {
    return cy.get('input').should('have.value', value)
  }
}
