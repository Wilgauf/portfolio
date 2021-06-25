import styled from 'styled-components'

export const ContactContainer = styled.div`

    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
    padding: 0 24px;
    justify-content: center;

`

export const ContactRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const ContactHeader = styled.p`
    color: #00BFA6;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`
export const ContactSubtitle = styled.h1`
    margin-bottom:24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width:480px){
        font-size: 32px;

    }
`


export const ContactMethod = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: 40px 1fr;
`

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    padding-right: 30px;
    
`

export const MethodWrap = styled.div`
    display: grid;
    grid-template-rows: .75fr .75fr;
    padding-left: 10px;
    margin: 0;
`
export const MethodTitle = styled.p`
    font-size: 15px;
    line-height: 20px;
    color: #00BFA6;
    font-weight: 600;

`
export const MethodDetail = styled.h1`
    font-size: 28px;
    max-width: 440px;
    line-height: 1.1;

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`

export const MethodDetailA = styled.a`
    font-size: 20px;
    text-decoration:none;
    color:#010101;
    font-weight: 700;
    max-width: 440px;
    line-height: 1.1;

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const ContactForm = styled.form`
    background: #00BFA6;
    max-width:400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`
export const FormHeader = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`
