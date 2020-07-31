import React , { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Grid } from "@material-ui/core"
import { useStyles } from "./styles/style"
import { changerState } from "./globalState"
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react" 

function _SideBar() {

  const [ value , setValue ] = useState('');
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const stayingState = event => {
    let { name } = event.target
    changerState({ value , name });
    handleDrawerClose()
  }

//SIDEBAR
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const takingValue = (e) => {
    setValue( ( e.target.value ) )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={ classes.appBar } >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose} className={ classes.x } >x</IconButton>
        </div>
        <TextareaAutosize className={ classes.textValue } onChange={takingValue}></TextareaAutosize>
        <Grid container className={ classes.btnCover } >
          <NavLink name='a' to="/a" className={ `${ classes.btnCoverbtn }` } onClick={ stayingState } > A </NavLink>
          <NavLink name='b' to="/b" className={ `${ classes.btnCoverbtn }` } onClick={ stayingState } > B </NavLink>
          <NavLink name='c' to="/c" className={ `${ classes.btnCoverbtn }` } onClick={ stayingState } > C </NavLink>
          <NavLink name='d' to="/d" className={ `${ classes.btnCoverbtn }` } onClick={ stayingState } > D </NavLink>
        </Grid>
      </Drawer>
        <div />
    </div>
  );
}
export const SideBar = observer( _SideBar )