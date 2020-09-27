import React from 'react'
import {InputWrapper, Input} from './style'

export default props =>{
    return(
        <InputWrapper>
            <Input {...props}/>
        </InputWrapper>
    )
}