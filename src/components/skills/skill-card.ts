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
      padding: 10px;
      border: 1px solid var(--border);
      border-radius: 1rem;
      box-shadow: 0 0 1rem 0 color-mix(in srgb, var(--text) 5%, transparent);

      background-color: var(--surface);
    } 

    .skill-icon {
      /* @link https://utopia.fyi/clamp/calculator?a=320,1200,50—70 */
      width: clamp(50px, 42.7273px + 2.2727vw, 70px);
      height: auto;
    }

    span {
      text-align: center;
    }
  `;

  render() {
    const logoName = `${this.skill}-logo`;
    const logoUrl = new URL(`../../assets/logos/${logoName}.svg`, import.meta.url).href;
    
    return html`
      <img src="${logoUrl}" alt=${logoName} width="50" height="50" class="skill-icon" />
      <span>${this.skill.toUpperCase()}</span>
    `;
  }
}