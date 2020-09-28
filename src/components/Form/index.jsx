import React, { useState } from 'react'
import { Form, DropzoneWrapper } from './style'
import Input from '../Input/index'
import Textarea from '../Textarea/index'
import Button from '../Button/index'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default props => {
    const [userText, setUserText] = useState('');

    async function searchUser(event) {
        event.preventDefault();
        console.log(userText)

    }
    return (
        <Form method="POST" onSubmit={searchUser}>
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
            <Textarea
                onChange={(e) => setUserText(e.target.value)}

            />
            <Button
                type="submit"
                text="Traduzir"
            />
        </Form>
    )
}