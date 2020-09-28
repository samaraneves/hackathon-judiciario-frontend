import React from 'react'
import { TextReport } from './style'

export default props => {
    return (
        <TextReport>
            <p>{props.children}</p>
        </TextReport>
    )
}