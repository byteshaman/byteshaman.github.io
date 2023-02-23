import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

import { ProjectsCardList } from './ProjectsCardList/ProjectsCardList';
import { ProjectsCarousel } from './ProjectsCarousel/ProjectsCarousel';
import v from '../../styles/_variables.module.scss';


export function Projects() {
  const matches = useMediaQuery(`(min-width:${v.breakpoint720})`);
  let componentToShow;

  // Desktop: carousel
  if (matches) {
    componentToShow = <ProjectsCarousel />
  } // Mobile: card
  else {
    componentToShow = (
      <ProjectsCardList />
    )
  }

  return (
    <>
      <h1>MY PROJECTS</h1>
      {componentToShow}
    </>
  )
}