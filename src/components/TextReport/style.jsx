import styled from 'styled-components'

export const TextReport = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 80vh;
    overflow: scroll;
    margin: 2rem auto;
    border-radius: 1rem;
    padding: 2rem;
    background-color: #fdfdfd;
    border: 1px solid var(--gray-light);
    line-height: 3.5rem;
    text-align: justify;

    @media(max-width:1060px){
        width: 80%;
    }
`;