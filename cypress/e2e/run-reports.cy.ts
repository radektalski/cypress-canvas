import { navbarComponent } from "../pom/components/navbar.component";
import { reportsComponent } from "../pom/components/reports/reports.component";
import { projectsPage } from "../pom/pages/projects.page";
import { reportsPage } from "../pom/pages/reports.page";
import { BddSteps } from "../support/commands";
import { loginData } from "../support/data/authenticationData";

const reportName = "Project Profitability";

describe("Reports", () => {
  before("Visit and login", () => {
    cy.logStep(BddSteps.GIVEN, "Logged in user");
    cy.visitAndLogin(loginData);
  });
  it("Run reports and verify results", () => {
    cy.logStep(BddSteps.AND, "User opens Reports and settings");
    navbarComponent.openReportsFromReportsAndSettings();
    cy.logStep(BddSteps.WHEN, "User runs reports");
    reportsPage.reportsTable.openReportByName(reportName);
    reportsComponent.runReportButton.click();
    cy.logStep(BddSteps.THEN, "Reports are visible in the table");
    projectsPage.projectsTable.getRows().should("have.length.greaterThan", 10);
  });
});
