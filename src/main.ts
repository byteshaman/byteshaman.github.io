import './components/profile-picture';
import './components/projects/project-list';
import './components/skills/skill-list';
import './components/theme-switcher';
import './components/typed-text';
import './style.css';
import { initTheme } from './utils/theme';

initTheme();

/**
 * TODO
 * replace colors to rgb → use rgba for transparency
 * assign a different hover effect on every refresh, but consistent across all of the cards 
 * improve dark green theme
 * improve detection of user's season to apply the custom theme (or maybe let the user choose on first visit?)
 * add a footer that shows the stack used
 * think of a new theme selection mode for mobile devices 
 */