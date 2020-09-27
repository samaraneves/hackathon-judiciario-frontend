import React from 'react'
import {Image,ImageWrapper} from './style'

export default props=> {
    return(
        <ImageWrapper
            maxWidth={props.maxWidth}
        >
            <Image 
                src={props.src} 
                alt={props.alt} 
            />
        </ImageWrapper>
    )
}