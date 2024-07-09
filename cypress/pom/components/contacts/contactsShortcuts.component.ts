import { ShortcutsBase, ShortcutsConfig } from "../../base/shortcuts.base";
import { CreateContactComponent } from "./createContact.component";

const shortcuts: ShortcutsConfig = {
  "Create Contact": 0,
  Contacts: 1,
  "Create From vCard": 2,
  "Database Import": 3,
};

export class ContactsShortcutsComponent extends ShortcutsBase {
  constructor() {
    super(shortcuts);
  }

  public openCreateContact(): CreateContactComponent {
    this.getItemByName("Create Contact").click();

    return new CreateContactComponent();
  }
}

export const contactsShortcutsComponent = new ContactsShortcutsComponent();

