import React from 'react'
import { useStyles } from './styles/style'
import { Work } from "./work"
import { globalState } from './globalState'
import { observer } from 'mobx-react'
import { toJS } from "mobx"

const _D = () => {

  let classes = useStyles()

  return(
    <div className={ classes.item } >
      { toJS(globalState[3]).map( (text ,index ) => (<Work text={ text } n={ `${ index }d` } /> )) }
    </div>
  )
}

export const D = observer( _D )