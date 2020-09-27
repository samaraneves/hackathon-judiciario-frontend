import styled from 'styled-components'

export const Label = styled.label`
    position: relative;
    background-color: var(--violet);
    color: #fff;
    height: 5rem;
    border-radius: 1rem;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex!important;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
export const InputWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
`;
export const Input = styled.input`
    width: 100%;
    margin: 2rem;
    display: none;
`;