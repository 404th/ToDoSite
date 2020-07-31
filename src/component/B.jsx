import React, { useEffect } from 'react'
import { toJS } from "mobx"
import { Work } from "./work"
import { useHistory, useParams, useLocation } from "react-router-dom"
import { observer } from 'mobx-react'
import { useStyles } from './styles/style'
import { globalState } from './globalState'

const _B = () => {

  let classes = useStyles()
  let locka = useLocation()

  return(
    <div className={ classes.item } >
      { toJS(globalState[1]).map( (text , index ) => (<Work text={ text } n={ index + `b` } />) ) }
    </div>
  )
}

export const B = observer( _B )