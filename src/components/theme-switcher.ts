import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { applyTheme, initTheme, type Mode, type Season } from '../utils/theme';

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
  @state() private season!: Season;
  @state() private mode!: Mode;
  private icons: Record<Season, string> = {
    spring: '🌱', summer: '☀️', autumn: '🍂', winter: '❄️'
  };

  static styles = css`
    /** refers to the shadow root of the component */
    :host { 
      display: flex; 
      align-items: center; 
      gap: 8px; 
    } 

    button {
      padding: 6px 12px;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      font-size: 13px;
      cursor: pointer;
      background-color: transparent;
      color: var(--text);
      transition: background-color 0.5s, 
                  color 0.5s, 
                  border-color 0.5s;
    }
    button.active {
      background-color: var(--primary);
      color: var(--bg);
    }
    button:hover:not(.active) {
      background-color: var(--surface);
    }
  `;

  constructor() {
    super();
    const { season, mode } = initTheme(); // destructured assignment based on localStorage values
    this.season = season;
    this.mode = mode;
  }

  render() {
    const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter'];

    return html`
      ${seasons.map(s => html`
        <button
          class="${this.season === s ? 'active' : ''}"
          @click=${() => this.handleClick(s)}
          title="${s}"
        >
          ${this.icons[s]}
        </button>
      `)}
    `;
  }

  private handleClick(s: Season) {
    if (this.season === s) this.toggleMode();
    else this.setSeason(s);
  }

  private setSeason(s: Season) {
    this.season = s;
    applyTheme(s, this.mode);
  }

  private toggleMode() {
    const next: Mode = this.mode === 'light' ? 'dark' : 'light';
    this.mode = next;
    applyTheme(this.season, next);
  }
}