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
                    for="upload"
                    id="upload" 
                    type="file" 
                    accept=".pdf, .doc,.txt,.docx"
                    textLabel="Clique para escolher um arquivo do computador"
                />
            <h2>Ou</h2>
            <DropzoneWrapper>
            <Dropzone 
                inputContent={(files, extra) => (extra.reject ? 'Arquivos de imagem, áudio e vídeo apenas' : 'Clique ou Arraste seus arquivos aqui')} 
            />
            </DropzoneWrapper>
            <h2>Cole aqui o seu texto:</h2>
                <Textarea name="text"/>
                <Button
                    type="submit"
                    text="Traduzir"
                />
        </Form>
    )
}