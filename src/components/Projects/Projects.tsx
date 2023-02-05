import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { ProjectInfo } from '../../models/interfaces';

import { ProjectsCardList } from './ProjectsCardList/ProjectsCardList';
import { ProjectsCarousel } from '../ProjectsCarousel/ProjectsCarousel';

import './Projects.scss';

export function Projects() {
  const matches = useMediaQuery('(min-width:700px)');
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