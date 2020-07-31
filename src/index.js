import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { observer } from 'mobx-react'
import { Grid } from "@material-ui/core"

//COMPONENTS
import { Main } from './component/main'

let App = observer(
  function _App(){
    return(
      <Grid>
        <Main/>   
      </Grid>
    )
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
