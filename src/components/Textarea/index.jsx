import React from 'react'
import { TextareaWrapper, Textarea } from '../Textarea/style'

export default props => {
    return (
        <TextareaWrapper>
            <Textarea onChange={props.onChange} placeholder="Você está com dificuldade de entender o significado de algum documento jurídico? Ah... Deixa que eu te ajudo! Cole aqui o Documento ou Trecho Jurídico no campo abaixo que eu me encarrego de traduzí-lo!" />
        </TextareaWrapper>
    )
}