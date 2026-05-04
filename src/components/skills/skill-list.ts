import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SKILLS } from '../../data/skills.data.js';
import './skill-card.js';


@customElement('skill-list')
export class SkillList extends LitElement {
  static styles = css`
    /** refers to the shadow root of the component */
    :host {
      /* Variables for easy tweaking */
      --max-columns: 4;
      --max-item-width: clamp(100px, 15vw, 150px);

      display: grid;
      margin-inline: auto !important;
      
      /* Force fixed width */
      grid-template-columns: repeat(auto-fit, minmax(var(--max-item-width), var(--max-item-width)));
      gap: var(--fluid-gap);
      
      /* The math that caps the maximum amount of columns */
      --gap-count: calc(var(--max-columns) - 1); /* N of elems - 1 */
      --total-gap-width: calc(var(--gap-count) * var(--fluid-gap));
      max-width: calc((var(--max-item-width) * var(--max-columns)) + var(--total-gap-width));

      /* Alignment */
      margin-inline: auto; /* Needed because */
      justify-content: center; /* Centers items inside the grid when they wrap */
    }

    /*# region simple effects for each skill */
  
    .angular:hover { /* zoom */
      transform: scale(1.05);
    }

    .css:hover {     
      transform: skew(-7deg);
      transition: transform 0.3s;
    }
    
    .git:hover { /* blur */
      filter: blur(2px);
    }

    .html:hover { /* rotate */
      transform: rotate(3deg) scale(1.03);
    }

    .javascript:hover {
      animation: buzz 0.15s linear 3;
    }

    .lit:hover { /* glow */
      box-shadow: 0 0 20px var(--border);
    } 

    .sass:hover { /* 3d */  
      transform: perspective(400px) rotateX(8deg) rotateY(-8deg);
      box-shadow: -5px 15px 15px color-mix(in srgb, var(--text) 15%, transparent);
    }

   .typescript:hover { /* pressed */
      transform: scale(0.96);
      box-shadow: inset 0 4px 8px color-mix(in srgb, var(--text) 15%, transparent);
    }

    /* buzz effect */  
    @keyframes buzz {
      50% {
        transform: translateX(3px) rotate(2deg);
      }
      100% {
        transform: translateX(-3px) rotate(-2deg);
      }
    }
    /*# endregion effects */
  `;
  
  render() {
    return html`
      ${SKILLS.map(s => html`
        <skill-card skill=${s} class="${s}"></skill-card>
      `)}
    `;
  }
}