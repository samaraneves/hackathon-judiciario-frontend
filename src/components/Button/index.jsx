import React from 'react'
import {Button, ButtonWrapper} from './style'

export default props =>{
    return(
        <ButtonWrapper>
            <Button type={props.type}>
                {props.text}
            </Button>
        </ButtonWrapper>
    )
}