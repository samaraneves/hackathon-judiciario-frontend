import React from 'react'
import {TextReport} from './style'

export default props =>{
    const palavras = [
        {'cor': 'YELLOW', 'palavras': 'desembargador(a) federal', 'significado': 'b'}, 
        {'cor': 'YELLOW', 'palavras': 'juiz(a) federal', 'significado': 'a'}, 
        {'cor': 'YELLOW', 'palavras': 'desembargador federal', 'significado': 'b'},
        {'cor': 'YELLOW', 'palavras': 'relator', 'significado': 'b'}, 
        {'cor': 'BABY PINK', 'palavras': '8a vara federal', 'significado': 'a'}, 
        {'cor': 'BABY PINK', 'palavras': 'sem resolucao do merito', 'significado': 'b'}, 
        {'cor': 'ORANGE', 'palavras': 'cpc', 'significado': 'a'}, 
        {'cor': 'BLUE', 'palavras': 'autor', 'significado': 'b'}, 
        {'cor': 'BLUE', 'palavras': 'sucumbenciais', 'significado': 'a'}, 
        {'cor': 'BLUE', 'palavras': 'principio da causalidade', 'significado': 'b'}, 
        {'cor': 'ORANGE', 'palavras': 'cpc', 'significado': 'a'}, 
        {'cor': 'BLUE', 'palavras': 'partes litigantes', 'significado': 'a'}
    ]
    
    return(
        <TextReport>
            <p>{props.children}</p>
        </TextReport>
    )
}