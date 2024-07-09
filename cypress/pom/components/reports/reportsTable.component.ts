import { TableBase } from "../../base/table.base";
import { reportsComponent } from "./reports.component";

enum ColumnNames {
  NAME = "Name",
}

export class ReportsTable extends TableBase {
  constructor() {
    super();
  }

  openReportByName(reportName: string) {
    this.search(reportName, "Reports");
    this.clickViewByColumnValue(ColumnNames.NAME, "Project Profitability");

    return reportsComponent;
  }
}

export const reportsTable = new ReportsTable();
