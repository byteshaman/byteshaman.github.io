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
      justify-content: center;
      gap: 10px; 
      
      aspect-ratio: 1;
      padding: .7rem;
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0 color-mix(in srgb, var(--text) 5%, transparent);

      background-color: var(--surface);
    } 

    .logo {
      width: clamp(40px, 10vw, 70px);
      height: auto;
    }

    span {
      text-align: center;
    }
  `;

  render() {
    const logoName = `${this.skill}-logo`;
    return html`
      <img src="src/assets/logos/${logoName}.svg" alt=${logoName} width="50" height="50" class="logo" />
      <span>${this.skill.toUpperCase()}</span>
    `;
  }
}