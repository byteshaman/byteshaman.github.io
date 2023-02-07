import { FooterTechnology } from "../../models/interfaces"


import react from '/src/assets/img/react.png';
import vite from '/src/assets/img/vite.png';
import mui from '/src/assets/img/mui.png';
import ghpages from '/src/assets/img/ghpages.png';
import Avatar from "@mui/material/Avatar/Avatar";

import './Footer.scss';
import v from '../../styles/_variables.module.scss';

import Tooltip from "@mui/material/Tooltip/Tooltip";

export function Footer() {
  const technologies: FooterTechnology[] = [
    { 
      name: 'React',
      url: 'https://reactjs.org/',
      icon: react
    },
    { 
      name: 'MUI',
      url: 'https://mui.com/material-ui/getting-started/overview/',
      icon: mui
    },
    { 
      name: 'Vite',
      url: 'https://vitejs.dev/',
      icon: vite
    },
    { 
      name: 'GitHub Pages',
      url: 'https://pages.github.com/',
      icon: ghpages
    },
  ]

  const iconSize = 56;


  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <footer>
      <h2>Made with...</h2>
      <div className='footer'>
        {technologies.map((tech,i) => 
          <Tooltip title={tech.name} placement="top">
            <Avatar
              key={i}
              alt={tech.name}
              src={tech.icon  }
              sx={{ width: iconSize, height: iconSize, backgroundColor: v.mainBgColor }}
              onClick={() => openInNewTab(tech.url)}
            />
          </Tooltip>
        )}
      </div>
    </footer>
  )
}