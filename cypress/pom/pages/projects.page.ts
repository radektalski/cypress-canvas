import {
  ProjectsTable,
  projectsTable,
} from "../components/projects/projectsTable.component";

export class ProjectsPage {
  readonly projectsTable: ProjectsTable;

  constructor() {
    this.projectsTable = projectsTable;
  }
}

export const projectsPage = new ProjectsPage();
