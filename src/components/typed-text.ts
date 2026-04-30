import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('typed-text')
export class TypedText extends LitElement {
  // Reactive property
  @property() text = '';

  static styles = css`
    :host {
      display: block;
    }

    .typewriter {  
      overflow: hidden;
      white-space: nowrap;
      letter-spacing: 0.05em;

      /* blinking cursor implemented as a right border */
      border-right: 2px solid var(--text-color, currentColor);

      /* Needed to make the typing animation end exactly at the last character */
      max-width: max-content;

      animation:
        typing 3s steps(45, end),
        blink-caret 1s step-end infinite;
    }

    /*
     * Wider letter-spacing on larger screens.
     * Replicates the original @include from-breakpoint-up(mobile) mixin.
     */
    @media (min-width: 480px) {
      .typewriter {
        letter-spacing: 0.15em;
      }
    }

    /* Expand width from 0 to 100% to reveal characters one step at a time */
    @keyframes typing {
      from { width: 0; }
      to   { width: 100%; }
    }

    /* Alternates the border colour to create the blinking-cursor illusion */
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50%      { border-color: var(--text-color, currentColor); }
    }
  `;

  render() {
    return html`<h1 class="typewriter">${this.text}</h1>`;
  }
}