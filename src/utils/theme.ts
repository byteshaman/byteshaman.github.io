export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type Mode = 'light' | 'dark';
export function applyTheme(season: Season, mode: Mode): void {
  const html = document.documentElement;
  html.setAttribute('data-theme', season);
  html.style.colorScheme = mode; // light-dark() will react to this
  localStorage.setItem('theme-season', season);
  localStorage.setItem('theme-mode', mode);
}

// Initial theme based on current season
export function getSeasonByDate(): Season {
  const month = new Date().getMonth(); // 0-11
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}

function getSystemMode(): Mode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function initTheme(): { season: Season; mode: Mode } {
  const savedSeason = localStorage.getItem('theme-season') as Season | null;
  const savedMode = localStorage.getItem('theme-mode') as Mode | null;

  const season = savedSeason ?? 'spring';
  const mode = savedMode ?? getSystemMode();

  applyTheme(season, mode);
  return { season, mode };
}