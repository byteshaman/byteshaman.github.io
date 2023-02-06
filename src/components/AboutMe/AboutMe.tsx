import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CodeIcon from '@mui/icons-material/Code'; 
import BuildIcon from '@mui/icons-material/Build';
import FavoriteIcon from '@mui/icons-material/Favorite';


import { ListItem as LI } from '../../models/interfaces';
import v from '../../styles/_variables.module.scss';
import './AboutMe.scss'

export function AboutMe() {
  const listItems: LI[] = [
    {
      description: 'Location',
      value: 'Italy',
      icon: PlaceIcon
    },
    {
      description: 'Languages',
      value: 'CSS3/SASS, HTML5, JS/TS, PHP, SQL',
      icon: CodeIcon
    },
    {
      description: 'Frameworks',
      value: 'Angular, Bootstrap, Laravel, React',
      icon: BuildIcon
    },
    {
      description: 'Interests',
      value: 'Anime, Music, Movies, Programming, Videogames',
      icon: FavoriteIcon
    },
  ]
  const iconSize: number = 56;

  // Override style
  const sxColor = {
    color: v.secondaryColor
  }
  

  const sxListItemColor = {
    ...sxColor,
    marginRight: '-15px', // place icon closer to text
  }


  return (
    <>
      <h1>ABOUT ME</h1>
      <div className="flex">
        <Avatar
          alt="Profile Pic"
          src='/assets/img/avatar.jpg'
          sx={{ width: iconSize, height: iconSize }}
        />
        <Divider orientation="vertical" variant="middle" flexItem sx={{ borderWidth: '1px', borderColor: 'white', marginLeft: '15px'}}/>
        <List dense={true}>
          {listItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <ListItem key={i}>
                <ListItemIcon sx={ sxListItemColor }>
                  <Icon/>
                </ListItemIcon>
                <ListItemText
                  primary={item.description}
                  secondary={item.value}
                  secondaryTypographyProps={{ style: sxColor }}
                  sx={ {marginTop: 0, marginBottom: 0} }
                />
                </ListItem>
              )
            }
          )}
        </List>
      </div>
    </>
  )
}