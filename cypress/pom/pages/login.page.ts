import { routes } from "../../support/config";
import { ButtonElement } from "../base/elements/button.element";
import { InputElement } from "../base/elements/input.element";

export type LoginData = {
  username: string;
  password: string;
};

class LoginPage {
  readonly usernameInput: InputElement;
  readonly passwordInput: InputElement;
  readonly loginButton: ButtonElement;

  constructor() {
    this.usernameInput = new InputElement('[id="login_user"]');
    this.passwordInput = new InputElement('[id="login_pass"]');
    this.loginButton = new ButtonElement('[id="login_button"]')
  }

  public login({ username, password }: LoginData): void {
    cy.url().should(
      "include",
      routes.login
    );
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export const loginPage = new LoginPage();
