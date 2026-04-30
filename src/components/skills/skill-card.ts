import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('skill-card')
export class SkillCard extends LitElement {
  @property() skill = '';

  static styles = css`
    /** refers to the shadow root of the component */
    :host { 
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px; 
      
      padding: 1.5rem;
      border: 1px solid var(--border);
      box-shadow: 0 0 1rem 0 color-mix(in srgb, var(--text) 5%, transparent);
    } 

    .logo {
      width: clamp(25px, 5vw, 60px);
    }

    span {
      font-size: clamp(12px, 3vw, 20px);
      text-align: center;
    }
  `;

  render() {
    const logoName = `${this.skill}-logo`;
    return html`
      <img src="src/assets/logos/${logoName}.svg" alt=${logoName} width="50px" />
      <span>${this.skill.toUpperCase()}</span>
    `;
  }
}