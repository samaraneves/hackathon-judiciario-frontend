import React from 'react'
import { TextareaWrapper, Textarea } from '../Textarea/style'

export default props => {
    return (
        <TextareaWrapper>
            <Textarea onChange={props.onChange} placeholder="Insira seu texto aqui." />
        </TextareaWrapper>
    )
}