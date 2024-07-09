export interface ShortcutsConfig {
  [key: string]: number; // Key is shortcut name, value is shortcut index (0-based)
}

export abstract class ShortcutsBase {
  protected shortcuts: ShortcutsConfig;
  protected componentSelector: string;
  protected sideBarItemSelector: string;

  constructor(shortcuts: ShortcutsConfig) {
    this.shortcuts = shortcuts;
    this.componentSelector = '[id="left-sidebar"]';
    this.sideBarItemSelector = ".sidebar-item-link-basic";
  }

  /**
   * Gets the component element of the sidebar by its identifier.
   *
   * @returns A Cypress chainable object for the left sidebar component.
   */
  get componentElement() {
    return cy.get(this.componentSelector);
  }

  /**
   * Retrieves an item from the sidebar based on its shortcut name.
   *
   * @param shortcutName - The name of the shortcut to retrieve.
   * @returns A Cypress chainable object for the specified sidebar item.
   * @throws Error if the shortcut name is not found in the shortcuts configuration.
   */
  public getItemByName(shortcutName: string) {
    if (!Object.keys(this.shortcuts).includes(shortcutName)) {
      throw new Error(
        `${shortcutName} is not available in the shortcuts sidebar`
      );
    }
    return this.componentElement.contains(shortcutName);
  }

  /**
   * Retrieves an item from the sidebar based on its index.
   *
   * @param index - The index of the shortcut to retrieve.
   * @returns A Cypress chainable object for the specified sidebar item.
   * @throws Error if the index is out of range for the available shortcuts.
   */
  public getItemByIndex(index: number) {
    if (index < 0 || index >= Object.values(this.shortcuts).length) {
      throw new Error(`${index} is not within the valid range for shortcuts`);
    }
    return this.componentElement.find(this.sideBarItemSelector).eq(index);
  }
}
