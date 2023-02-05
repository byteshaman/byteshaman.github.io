import { ProjectInfo } from '../../../models/interfaces';
import { CheckItOutButton } from '../../CheckItOutButton/CheckItOutButton';
 
export function CarouselItem(props: {item: ProjectInfo}) {
  return (
    <>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <CheckItOutButton
        url={props.item.url}
      />
    </>
  )
}