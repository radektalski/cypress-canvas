import { LoginData, loginPage } from "../pom/pages/login.page";
import { endpoints, routes } from "./config";

export enum BddSteps {
  GIVEN = "GIVEN",
  WHEN = "WHEN",
  THEN = "THEN",
  AND = "AND",
}

Cypress.Commands.add("logStep", (bddStep: BddSteps, text: string) => {
  Cypress.log({
    name: bddStep,
    message: text,
  });
});

Cypress.Commands.add("visitAndLogin", ({ username, password }: LoginData) => {
  cy.visit(routes.login);
  loginPage.login({ username, password });
  cy.log(`Login with ${username} / ${password} account`);
});

Cypress.Commands.add(
  "visitAndLoginViaAPI",
  ({ username, password }: LoginData) => {
    cy.request({
      method: "POST",
      url: endpoints.login,
      body: {
        username,
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const cookies = response.headers["set-cookie"];
      if (cookies) {
        const cookieArray = Array.isArray(cookies) ? cookies : [cookies];
        cookieArray.forEach((cookie) => {
          const [name, value] = cookie.split(";")[0].split("=");
          cy.setCookie(name, value);
        });
      }
      cy.setCookie("ck_Claro_style", "default");
      cy.setCookie("ck_login_forget", "1");
      cy.setCookie("ck_login_language", "en_us");
    });
    cy.visit(routes.login);
  }
);

Cypress.Commands.add(
  "interceptQuickSearch",
  (filter_text: string, module: string) => {
    cy.intercept("POST", `**${endpoints.quickSearch}`, {
      statusCode: 200,
      body: {
        module,
        filter_text,
      },
    }).as("quickSearchRequest");
  }
);
