import React from 'react'
import { useStyles } from './styles/style'
import { Work } from "./work"
import { globalState } from './globalState'
import { observer } from 'mobx-react'
import { toJS } from "mobx"

const _C = () => {

  let classes = useStyles()

  return(
    <div className={ classes.item } >
      { toJS(globalState[2]).map( (text , index ) => (<Work text={ text } n={ `${ index }c` } />) ) }
    </div>
  )
}

export const C = observer( _C )