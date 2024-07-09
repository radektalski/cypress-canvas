import { routes } from "../../support/config";
import { ButtonElement } from "../base/elements/button.element";
import { ContactsPage, contactsPage } from "../pages/contacts.page";
import { ReportsPage, reportsPage } from "../pages/reports.page";

export enum MainNavbarItems {
  SALES_AND_MARKETING = "Sales & Marketing",
  REPORTS_AND_SETTINGS = "Reports & Settings",
}

export enum SubNavbarItem {
  CONTACT = "Contacts",
}

export enum VisitBy {
  URL = "url",
  UI = "ui",
}

export class NavbarComponent {
  readonly navbarSubItemButton: ButtonElement;

  constructor() {
    this.navbarSubItemButton = new ButtonElement("a.menu-tab-sub-list");
  }
  private openMainNavbarItem(navbarItem: MainNavbarItems) {
    return cy.contains(navbarItem).click().trigger('mouseover');
  }

  private openSubNavbarItem(subNavbarItem: SubNavbarItem) {
    return this.navbarSubItemButton.element
      .contains(subNavbarItem)
      .click()
      .wait(100);
  }

  public openContactsFromSalesAndMarketing(
    visitBy: VisitBy = VisitBy.URL
  ): ContactsPage {
    if (visitBy === VisitBy.UI) {
      this.openMainNavbarItem(MainNavbarItems.SALES_AND_MARKETING);
      this.openSubNavbarItem(SubNavbarItem.CONTACT);
    } else if (visitBy === VisitBy.URL) {
      cy.visit(routes.salesAndMarketing);
    }

    return contactsPage;
  }

  public openReportsFromReportsAndSettings(
    visitBy: VisitBy = VisitBy.URL
  ): ReportsPage {
    if (visitBy === VisitBy.UI) {
      this.openMainNavbarItem(MainNavbarItems.SALES_AND_MARKETING);
      this.openSubNavbarItem(SubNavbarItem.CONTACT);
    } else if (visitBy === VisitBy.URL) {
      cy.visit(routes.reportsAndSettings);
    }

    return reportsPage;
  }
}

export const navbarComponent = new NavbarComponent();
