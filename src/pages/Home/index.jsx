import React from 'react'

import Header from '../../components/Header'
import Form from '../../components/Form'

export default props => {
    return (
        <>
            <Header />
            <Form history={props.history} />
        </>
    )
}