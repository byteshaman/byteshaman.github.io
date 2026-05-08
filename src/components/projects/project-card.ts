import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Project } from '../../data/projects.data';

@customElement('project-card')
export class ProjectCard extends LitElement {
  // I must specify the type because it's not String (default)
  @property({ type: Object }) project!: Project;

  static styles = css`
    /** refers to the shadow root of the component */
    :host {
      display: grid;
      grid-template-areas: "stack"; /* YT: watch?v=8327_1PINWI */

      overflow: hidden; /* avoid overflow on image zoom */
      border-radius: 1rem;
    }

    :host(:hover) {
      & img { transform: scale(1.1); }
      & .grid-content { visibility: visible; }
      & .card-title, .card-content { transform: translateY(0); }
    }
    
    img {
      grid-area: stack;
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: center;
      
      transition: transform 0.6s ease; /* zoom effect */
    }


    .overlay-container {
      grid-area: stack;

      color: var(--lightest);
      background-color: rgba(0, 0, 0, .8);
      
      z-index: 2; /* stay on top of image, prevents flickering during mouse movement */
      opacity: 0; 
      transition: opacity .6s ease;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      
      &:hover { /* trigger overlay */
        opacity: 1;
        visibility: visible;
      }

      .card-title, .card-content {
        transition: transform 0.3s linear;
      }

      .card-title {transform: translateY(-80px);}

      .card-content {
        transform: translateY(80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        a { /* button-like link */
          text-decoration: none;
          padding: .25rem;
          color: var(--text);
          background-color: var(--surface);
          border-radius: 5px;
        }
      }
    }
  `;

  render() {
    const imgUrl = new URL(`../../assets/projects/${this.project.id}.webp`, import.meta.url).href;

    return html`
      <img src="${imgUrl}" alt="project pic" width="150" height="150"/>

      <div class="overlay-container">
        <p class="card-title">${this.project.title}</p>
        <div class="card-content">
          <small>${this.project.desc}</small>
          <a href="${imgUrl}" target="_blank">Check it out &rsaquo;</a>
        </div>
      </div>
    `;
  }
}