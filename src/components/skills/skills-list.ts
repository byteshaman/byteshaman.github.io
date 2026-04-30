import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SKILLS } from './../../data/skills.data';
import './skill-card.js';



@customElement('skill-list')
export class SkillList extends LitElement {
  static styles = css`
    /** refers to the shadow root of the component */
    :host { 
      display: grid;
      grid-template-columns: repeat(4, 150px);
      justify-content: center;
      gap: 1rem;

      @media (width <= 900px) {
        grid-template-columns: repeat(2, 150px);
      } 
  `;
  
  render() {
    return html`
      ${SKILLS.map(s => html`<skill-card skill=${s}></skill-card>`)}
    `;
  }
}