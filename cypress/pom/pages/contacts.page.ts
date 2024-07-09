import {
  ContactsShortcutsComponent,
  contactsShortcutsComponent,
} from "../components/contacts/contactsShortcuts.component";

export class ContactsPage {
  readonly contactsShortcut: ContactsShortcutsComponent;

  constructor() {
    this.contactsShortcut = contactsShortcutsComponent;
  }
}

export const contactsPage = new ContactsPage();
