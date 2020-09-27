import React from 'react'
import Image from '../Image'
import {Header} from './style'
import {Logo} from '../../assets/index'

export default props =>{
    return(
    <Header>
        <Image
            src={Logo}
            alt={"Ju Traduz AI logo"}
            maxWidth={"30rem"}
        />
        {props.children}
    </Header>
    )
}