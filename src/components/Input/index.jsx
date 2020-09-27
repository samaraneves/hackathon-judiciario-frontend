import React from 'react'
import {InputWrapper, Input, Label} from './style'

export default props =>{
    return(
        <InputWrapper>
            <Label for={props.for}>
                {props.textLabel}
                <Input {...props}/>
            </Label>
        </InputWrapper>
    )
}