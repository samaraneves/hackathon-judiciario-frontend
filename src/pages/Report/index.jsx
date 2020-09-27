import React from 'react'
import Header from '../../components/Header'
import Image from '../../components/Image'
import {Arrow} from '../../assets/index'
import { Link } from 'react-router-dom';

export default props => {
    return (
        <>
        <Header>
        <Link to="/">
            <Image 
                src={Arrow} 
                alt="Voltar para a página anterior."
                maxWidth="90px"
            />
        </Link>
        </Header>
        </>
    )
}