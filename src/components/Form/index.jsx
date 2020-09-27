import React from 'react'
import {Form, DropzoneWrapper} from './style'
import Input from '../Input/index'
import Textarea from '../Textarea/index'
import Button from '../Button/index'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default props => {
    return(
        <Form method="POST" onSubmit="{}">
                <Input 
                    type="file" 
                    accept=".pdf, .doc,.txt,.docx"
                />
            <h2>Ou</h2>
            <DropzoneWrapper>
                <Dropzone
                    accept=".pdf, .doc,.txt,.docx"
                />
            </DropzoneWrapper>
            <h2>Cole aqui o seu texto:</h2>
                <Textarea/>
                <Button
                    type="submit"
                    text="Traduzir"
                />
        </Form>
    )
}