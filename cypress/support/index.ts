import { LoginData } from "../pom/pages/login.page";
import { BddSteps } from "./commands";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      logStep(bddStep: BddSteps, text: string): Chainable;
      visitAndLogin(loginData: LoginData): Chainable<void>;
      visitAndLoginViaAPI(loginData: LoginData): Chainable<void>;
      interceptQuickSearch(
        filter_text: string,
        module: string
      ): Chainable<void>;
    }
  }
}
