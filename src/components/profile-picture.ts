import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { assets } from '../utils/assets';

@customElement('profile-picture')
export class ProfilePicture extends LitElement {

  static styles = css`
    /** refers to the shadow root of the component */
    :host { 
      width: clamp(250px, 35vw, 400px);
      display: grid;
      grid-template-areas: "stack";

      img {
        display: block;
        width: 100%;
        height: auto; /* needed because of the specified height in the html tag */
        aspect-ratio: 1 / 1;
        object-fit: cover;
        grid-area: stack; /* occupy same cell */
        transition: opacity 1.5s ease;

        &.pfp {opacity: 0;}
      }
    }

    :host(:hover) {
      .pfp {opacity: 1;}
      .placeholder {opacity: 0;}
    }
  `;

  render() {
    const placeholder = assets['../assets/placeholder.svg'];
    const profilePic = assets['../assets/profile-pic.webp'];
    
    return html`
      <img src="${placeholder}" alt="pfp placeholder" class="placeholder" width="100" height="100" fetchpriority="high"/>
      <img src="${profilePic}" alt="pfp" loading="lazy" class="pfp"  width="100" height="100"/>
    `;
  }


}