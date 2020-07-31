import React from "react";
import { useStyles } from "./styles/style";
import "./styles/style.css";
import { deleterStateItem } from './globalState'
import { observer } from 'mobx-react'

const _Work = props => {
  let classes = useStyles();

  let deleteItem = () => {
    deleterStateItem( props.n )
  }

  return (
    <div className={classes.work} key={props.n}>
      <div className={classes.firstDiv}>
        <div className={classes.roww}>
          <div className={classes.one }>
            <div className={classes.oneInside}>{props.text}</div>
          </div>
          <div className={classes.two}>
            <button className={classes.twoButton} onClick={ deleteItem } >Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Work = observer( _Work )