import styled from 'styled-components'

export const DropzoneWrapper = styled.div`
    border: 1px solid var(--gray-light);
    width: 100%;
    border-radius: 1rem;
        div {
            border: 0;
        }
        div label {
            font-family: var(--font-family)!important;
            color: #494949;
            font-size: 2rem;
        }
`;
export const Form =styled.form`
    width: 100%;
    height: 100%;
    padding: 2rem;
    max-width: 1000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;

    h2{
        margin: 2rem 0 2rem 0;
    }
`;