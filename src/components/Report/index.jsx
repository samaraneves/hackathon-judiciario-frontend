import React from 'react'
import { Report } from './style'

export default props => {
    return (

        < Report color={props.color} >
            { props.children}
        </Report >
    )
}