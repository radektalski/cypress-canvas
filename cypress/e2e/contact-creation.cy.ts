import { contactComponent } from "../pom/components/contacts/contact.component";
import { VisitBy, navbarComponent } from "../pom/components/navbar.component";
import { BddSteps } from "../support/commands";
import { loginData } from "../support/data/authenticationData";
import { basicContactData } from "../support/data/contactData";

const editedContactData = {
  firstName: "Elton",
  lastName: "John",
  title: "Artist",
};

describe("Contact creation", () => {
  before("Visit and login", () => {
    cy.logStep(BddSteps.GIVEN, "Logged in user");
    cy.visitAndLoginViaAPI(loginData);
  });

  it("Created contact should have correct data", () => {
    cy.logStep(BddSteps.AND, "User opens Sales and Marketing");
    const contactsPage = navbarComponent.openContactsFromSalesAndMarketing(VisitBy.UI);
    cy.logStep(BddSteps.WHEN, "User creates a new contact");
    const createContactComponent = contactsPage.contactsShortcut.openCreateContact();
    createContactComponent.createContact(basicContactData);
    cy.logStep(BddSteps.THEN, "Contact has correct data");
    contactComponent.verifyContactData(basicContactData);
    cy.logStep(BddSteps.WHEN, "User updates a new contact");
    const contact = createContactComponent.clickEdit().createContact(editedContactData);
    cy.logStep(BddSteps.THEN, "Contact has updated data");
    contact.verifyContactData(editedContactData);
  });
});
