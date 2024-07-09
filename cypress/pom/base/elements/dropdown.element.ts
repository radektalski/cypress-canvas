import { InputElement } from "./input.element";

export class DropdownElement {
  readonly dropdownName: string;
  readonly inputSelector: string;
  readonly dropdownOptionsSelector: string;
  readonly dropdownSelectedOptionsSelector: string;
  readonly inputSearchElement: InputElement;

  constructor(dropdownName: string, searchForOptionFirst: boolean = false) {
    this.dropdownName = dropdownName;
    this.inputSelector = `[id="DetailForm${this.dropdownName}-input"]`;
    this.dropdownOptionsSelector = searchForOptionFirst
      ? `[id="DetailForm${this.dropdownName}-input-search-list"] .single`
      : `[id="DetailForm${this.dropdownName}-input-popup"] .single`;
    this.dropdownSelectedOptionsSelector = `[id="DetailForm${this.dropdownName}-input-body"] .single`;
    this.inputSearchElement = new InputElement(
      `[id="DetailForm${this.dropdownName}-input-search-text"] input`
    );
  }

  public openDropdownMenu() {
    cy.get(this.inputSelector).click();

    return this;
  }

  public searchForDropdownOption(optionName: string) {
    this.inputSearchElement.type(optionName);

    return this;
  }

  public clickDropdownOptionByNameOrIndex(optionOrIndex: string | number) {
    const options = cy.get(this.dropdownOptionsSelector);
    if (typeof optionOrIndex === "string") {
      options.contains(optionOrIndex).click();
    } else if (typeof optionOrIndex === "number") {
      options.eq(optionOrIndex).click();
    }

    return this;
  }

  public selectOptions(
    optionsName: string | string[],
    searchForOptionFirst = true
  ) {
    const options = Array.isArray(optionsName) ? optionsName : [optionsName];

    options.forEach((optionName) => {
      this.openDropdownMenu();
      if (searchForOptionFirst) {
        this.searchForDropdownOption(optionName);
      }
      this.clickDropdownOptionByNameOrIndex(optionName);
    });
  }

  public verifySelectorOptions(expectedOptions: string[]) {
    cy.get(this.dropdownSelectedOptionsSelector).then(($elements) => {
      const actualTexts = [...$elements].map((el) => el.innerText.trim());
      expect(actualTexts).to.deep.equal(expectedOptions);
    });
  }
}
