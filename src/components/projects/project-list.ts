import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PROJECTS } from '../../data/projects.data';
import './project-card.ts';


@customElement('project-list')
export class ProjectList extends LitElement {
  static styles = css`
    :host {
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,150—400 */
      --fluid-width: clamp(150px, 59.0909px + 28.4091vw, 400px);

      display: grid;
      margin-inline: auto !important;

      grid-template-columns: repeat(2, var(--fluid-width));

      justify-content: center;
      gap: var(--fluid-gap-0);
    }
  `;
  
  render() {
    return html`
      ${PROJECTS.map(p => html`
        <project-card .project=${p}></project-card>
      `)}
    `;
  }
}