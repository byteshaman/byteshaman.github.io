import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem/CaouselItem";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

import { projects } from "../../models/projects";

export function ProjectsCarousel() {

  const carouselProps: CarouselProps = {
    height: 200,
    autoPlay: false,
    animation: "slide",
    duration: 500,
    fullHeightHover: false,
    navButtonsAlwaysVisible: true,
    indicatorContainerProps: {
      style: {
        marginTop: '25px', // move bottom indicators further down
      }
    },
    sx: { textAlign: 'center', width: '650px', margin: '0 auto' }
  }

  
  return (
    <Carousel {...carouselProps}>
      {projects.map((item, i) => <CarouselItem key={i} item={item} />)}
    </Carousel>
  )
}