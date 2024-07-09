import { DropdownElement } from "../../base/elements/dropdown.element";
import { InputElement } from "../../base/elements/input.element";
import { FormBase } from "../../base/form.base";
import { ContactComponent, contactComponent } from "./contact.component";

export type ContactData = {
  firstName?: string;
  lastName?: string;
  title?: string;
  salutation?: string;
  categories?: string[];
  businessRoles?: string[];
};

export class CreateContactComponent extends FormBase {
  firstNameInput: InputElement;
  lastNameInput: InputElement;
  titleInput: InputElement;
  salutationDropdown: DropdownElement;
  categoryDropdown: DropdownElement;
  businessRole: DropdownElement;

  constructor() {
    super();
    this.firstNameInput = new InputElement('[id="DetailFormfirst_name-input"]');
    this.lastNameInput = new InputElement('[id="DetailFormlast_name-input"]');
    this.titleInput = new InputElement('[id="DetailFormtitle-input"]');
    this.salutationDropdown = new DropdownElement("salutation");
    this.categoryDropdown = new DropdownElement("categories", true);
    this.businessRole = new DropdownElement("business_role");
  }

  public createContact(contactData: ContactData): ContactComponent {
    contactData.firstName && this.firstNameInput.type(contactData.firstName);
    contactData.lastName && this.lastNameInput.type(contactData.lastName);
    contactData.title && this.titleInput.type(contactData.title);
    contactData.salutation &&
      this.salutationDropdown.selectOptions(contactData.salutation, false);
    contactData.categories &&
      this.categoryDropdown.selectOptions(contactData.categories);
    contactData.businessRoles &&
      this.businessRole.selectOptions(contactData.businessRoles, false);
    this.clickSave()

    return contactComponent;
  }
}

export const createContactComponent = new CreateContactComponent();
