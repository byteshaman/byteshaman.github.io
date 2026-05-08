
// alternative to new URL() + dynamic variable = import.meta.glob
//! { eager: true, as: 'url' } must be specified every time because it's set statically
export const assets: Record<string, string> = {
  // ...import.meta.glob('../assets/logos/*.svg', { eager: true, as: 'url' }),
  // ...import.meta.glob('../assets/projects/*.webp', { eager: true, as: 'url' }),
  // loose files (import: 'default') is needed
  ...import.meta.glob('../assets/*.svg', { eager: true, as: 'url', import: 'default' }), 
  ...import.meta.glob('../assets/*.webp', { eager: true, as: 'url', import: 'default' }), 
};

// An idea would be to call this function as an alternative to using new URL()
export function getProjectImg(name: string): string {
  return assets[`../assets/projects/${name}.webp`];
}
export function getSkillImg(name: string) {
  return assets[`../../assets/logos/${name}-logo.svg`];
}