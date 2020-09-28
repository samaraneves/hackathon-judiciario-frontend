import styled from 'styled-components'
export const ButtonWrapper = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    @media(min-width: 1000px){
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 1.5rem;
    background-color: #f5ccb6;
    color: inherit;
    font-size: 1.3rem;
    border-radius: 1rem;
    border: 1px solid #e96c36;
    font-family: var(--font-family);
    font-size: 1.8rem;
    cursor: pointer;
;
    &:hover,
    &:active,
    &:focus{
        transition: 1s;
        opacity: 0.8;
    }
    @media(min-width: 1000px) {
        max-width: 250px;
    }
`;
