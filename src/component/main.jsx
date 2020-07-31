import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Route, Switch, BrowserRouter as Bro } from "react-router-dom";
import { useStyles } from "./styles/style";
import { Grid, Container } from "@material-ui/core";
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import { D } from "./D";
import { Home } from "./Home";
import { SideBar } from './sideBar'

export const Main = () => {
  let classes = useStyles();

  return (

    <Bro>
      <div className="main">
        <SideBar />
        <Container justify="center" maxWidth="md">
          
          <Grid item className={`${classes.cover} p-md-3 p-3`} md={12} xs={12}>
            
            <Grid item md={12} xs={12} className={`p-md-3 p-3 ${classes.first}`}>
              <Grid className={classes.firstGrid} item xs={12} md={12}>
                <NavLink to={"/a"} className={`btn ${classes.buttonlar}`}> A </NavLink>
                <NavLink to={"/b"} className={`btn ${classes.buttonlar}`}> B </NavLink>
                <NavLink to={"/c"} className={`btn ${classes.buttonlar}`}> C </NavLink>
                <NavLink to={"/d"} className={`btn ${classes.buttonlar}`}> D </NavLink>
              </Grid>
            </Grid>

            <Grid item md={12} xs={12} className={`p-md-3 p-3 ${classes.second} `}>
              <Grid item md={12} xs={12} className={`${classes.secondGrid}`}>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/a" component={A} />
                  <Route path="/b" component={B} />
                  <Route path="/c" component={C} />
                  <Route path="/d" component={D} />
                </Switch>
              </Grid>
            </Grid>
          
          </Grid>
        </Container>
      </div>
    </Bro>
  );
};
