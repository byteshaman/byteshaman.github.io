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
      name: 'React 18.2.0',
      url: 'https://reactjs.org/',
      icon: react
    },
    { 
      name: 'MUI 5.11.6',
      url: 'https://mui.com/material-ui/getting-started/overview/',
      icon: mui
    },
    { 
      name: 'Vite 4.0.0',
      url: 'https://vitejs.dev/',
      icon: vite
    },
    { 
      name: 'GitHub Pages',
      url: 'https://pages.github.com/',
      icon: ghpages
    },
  ]


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
              className="icon"
              alt={tech.name}
              src={tech.icon  }
              sx={{ backgroundColor: v.mainBgColor }}
              onClick={() => openInNewTab(tech.url)}
            />
          </Tooltip>
        )}
      </div>
    </footer>
  )
}