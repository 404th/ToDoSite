import React, { useEffect } from 'react'
import { useStyles } from './styles/style'
import { Work } from "./work"
import { globalState } from './globalState'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Redirect } from "react-router-dom"

const _A = () => {

  let classes = useStyles()

  return(
    <div className={ classes.item } >
      { toJS( globalState[0] ).map( (text , index ) => (<Work text={ text } n={ `${ index }a` } />)) }
      { useEffect( () => ( <Redirect to="/" /> ) ) }  
  </div>
  )
}

export const A = observer( _A )