import React from 'react'
import { Report } from './style'

export default props => {
    return (

        < Report color={props.color} className="tooltip">
            { props.children}

            <span className="tooltiptext">{props.significado}</span>

        </Report >
    )
}