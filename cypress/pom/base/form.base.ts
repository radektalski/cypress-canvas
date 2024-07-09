import { ButtonElement } from "./elements/button.element";

export abstract class FormBase {
  readonly saveButton: ButtonElement;
  readonly editButton: ButtonElement;

  constructor() {
    this.saveButton = new ButtonElement('[name="DetailForm_save2"]');
    this.editButton = new ButtonElement('[id="DetailForm_edit"]');
  }

  public clickSave(): void {
    this.saveButton.click();
  }

  public clickEdit() {
    this.editButton.click();

    return this;
  }
}
