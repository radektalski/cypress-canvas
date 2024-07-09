import { ButtonElement } from "../../base/elements/button.element";

export class ReportsComponent {
  readonly runReportButton: ButtonElement;

  constructor() {
    this.runReportButton = new ButtonElement('[name="FilterForm_applyButton"]');
  }
}

export const reportsComponent = new ReportsComponent
