import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem/CaouselItem";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

import { projects } from "../../../models/projects";

export function ProjectsCarousel() {

  const carouselProps: CarouselProps = {
    height: 200,
    autoPlay: false,
    animation: "fade",
    fullHeightHover: false,
    navButtonsAlwaysVisible: true,
    indicatorContainerProps: {
      style: {
        marginTop: '-30px', // move bottom indicators up
      }
    },
    sx: { textAlign: 'center', width: '700px', margin: '0 auto' }
  }

  
  return (
    <Carousel {...carouselProps}>
      {projects.map((item, i) => <CarouselItem key={i} item={item} />)}
    </Carousel>
  )
}