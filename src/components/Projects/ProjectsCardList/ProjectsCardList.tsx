import Box from '@mui/material/Box/Box'; 
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import CardActions from '@mui/material/CardActions/CardActions';
import CardHeader from '@mui/material/CardHeader/CardHeader';

import { CheckItOutButton } from '../../CheckItOutButton/CheckItOutButton';
import { projects } from '../../../models/projects';


import v from '../../../styles/_variables.module.scss';

export function ProjectsCardList(): JSX.Element {
  const sxCard = {
    marginBottom: '15px',
    maxWidth: 345,
    color: v.mainColor,
    backgroundColor: v.mainBgColor
  }

  return (
    <>
      {
        projects.map((item, i) =>
          <Box component='div' className={i % 2 ? 'right-card' : 'left-card'}>
            <Card key={i} sx={sxCard}>
              <CardHeader title={item.name} disableTypography={true}></CardHeader>
              <CardContent sx={{ padding: 0 }}>{item.description}</CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <CheckItOutButton
                  url={item.url}
                />
              </CardActions>
            </Card>
          </Box>)
      }
    </>
  )
}