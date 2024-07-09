import { TextElement } from "../../base/elements/text.elements";
import { ContactData } from "./createContact.component";

export class ContactComponent {
  readonly header: TextElement;
  readonly category: TextElement;

  constructor() {
    this.header = new TextElement('[id="_form_header"]');
    this.category = new TextElement(".summary-list");
  }

  public verifyContactData(contactData: ContactData): void {
    contactData.firstName &&
      this.header.shouldContainsText(contactData.firstName);
    contactData.lastName &&
      this.header.shouldContainsText(contactData.lastName);
    contactData.categories?.forEach((category) => {
      this.category.shouldContainsText(category);
    });
  }
}

export const contactComponent = new ContactComponent();
