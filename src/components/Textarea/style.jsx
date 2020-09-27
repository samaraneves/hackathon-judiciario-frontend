import styled from 'styled-components'

export const TextareaWrapper = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
export const Textarea = styled.textarea`
    resize: none;
    border-radius: 1rem;
    border: 1px solid  var(--gray-light);
    max-width: 1000px;
    width: 100%;
    height: 50vh;
    padding: 2rem;
    margin: 0 0 2rem 0;
    font-family: var(--font-family);
    font-size: 1.6rem;
    &::placeholder{
        color: var(--gray-dark);

    }
`;