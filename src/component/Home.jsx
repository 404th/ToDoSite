import React from 'react';
import { useStyles } from "./styles/style"

export const Home = () => {

  let classes = useStyles()

  return (
    <div className={ classes.item  } ></div>
  )
}
