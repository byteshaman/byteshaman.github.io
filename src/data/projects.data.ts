export type Project = {
  id: string;
  title: string;
  desc: string;
}

export const PROJECTS: Project[] = [
  {id: 'music-map', desc: '`1 country - 1 music album` interactive map', title: "Music Map"},
  {id: 'useful-stuff', desc: 'A collection of useful sites and software', title: "Useful Stuff"},
  { id: 'my-tv-list', desc: 'Personal TV show tracker', title: "MyTVList"},
  { id: 'favorite-albums', desc: 'Favore music albums showcase', title: "F.A.S."}
] as const;