import { ButtonElement } from "./elements/button.element";
import { InputElement } from "./elements/input.element";

export abstract class TableBase {
  readonly selector: string;
  readonly rowsSelector: string;
  readonly viewIconSelector: string;
  readonly viewSelector: ButtonElement;
  readonly searchInput: InputElement;

  constructor() {
    this.selector = '[id^="listView-"][id*="-main"]';
    this.rowsSelector = "tbody tr";
    this.viewIconSelector = '[id^="adspan_listView-"]';
    this.viewSelector = new ButtonElement('[id="MiniDetailForm_view-label"]');
    this.searchInput = new InputElement('[id="filter_text"]');
  }

  /**
   * Search for the value table
   *
   * @param value - value which will be searched in the table
   * @param module - module name for quickSearchRequest intercept.
   */
  public search(value: string, module: string) {
    cy.interceptQuickSearch(value, module);
    this.searchInput.type(value).type("{enter}");
    cy.wait(100);
    this.getRows().should("have.length.greaterThan", 0);
    cy.wait("@quickSearchRequest");

    return this;
  }

  /**
   * Get all rows from the dable
   *
   * @returns Cypress.Chainable<JQuery<HTMLElement>>
   */
  public getRows() {
    return cy.get(this.rowsSelector);
  }

  /**
   * Finds a row by the value in a specified column.
   *
   * @param columnName - The name of the column to search in.
   * @param value - The value to search for in the specified column.
   * @returns Cypress.Chainable<JQuery<HTMLElement>>
   */
  findRowByColumn(
    columnName: string,
    value: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selector).within(() => {
      let columnIndex: number | null = null;

      // Find the index of the column by its name
      cy.get("thead th")
        .each((header, index) => {
          if (header.text().trim() === columnName.trim()) {
            columnIndex = index;
          }
        })
        .then(() => {
          if (columnIndex === null) {
            throw new Error(`Column "${columnName}" not found.`);
          }

          // Now, find the row where the column has the specific value
          cy.get("tbody tr")
            .filter((_, row) => {
              const cellValue = Cypress.$(row)
                .children()
                .eq(columnIndex!)
                .text()
                .trim();
              return cellValue === value.trim();
            })
            .should("have.length", 1) // Ensure exactly one matching row
            .first(); // Return the first matching row element
        });
    });
  }

  /**
   * Clicks an element in the row found by the value in a specific column.
   *
   * @param columnName - The name of the column to search in.
   * @param value - The value to search for in the specified column.
   */
  clickViewByColumnValue(columnName: string, value: string): void {
    this.findRowByColumn(columnName, value).then((row) => {
      cy.wrap(row).find(this.viewIconSelector).click();
    });
    this.viewSelector.click();
  }
}
