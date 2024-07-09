import {
  ReportsTable,
  reportsTable,
} from "../components/reports/reportsTable.component";

export class ReportsPage {
  readonly reportsTable: ReportsTable;

  constructor() {
    this.reportsTable = reportsTable;
  }
}

export const reportsPage = new ReportsPage();
