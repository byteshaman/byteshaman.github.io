import { Button } from '@mui/material';
import { Component } from 'react';

import v from '../../styles/_variables.module.scss';

const sxButton = {
  color: v.buttonTextColor,
  border: `1px solid ${v.buttonBorderColor}`,
  "&:hover": {
    border: `1px solid ${v.buttonTextColor}`,
  }
}

export function CheckItOutButton(props: { url: string }) {
  return (
    <Button
      href={props.url}
      variant='outlined'
      sx={sxButton}
    >
      Check it out!
    </Button>
  )
}