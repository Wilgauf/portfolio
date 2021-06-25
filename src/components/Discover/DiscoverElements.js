import styled from 'styled-components'

export const DiscoverContainer = styled.div`
    color:#fff;
    background: #010606;

    @media screen and (max-width: 1100px) {
        padding: 100px 0;
    }

`

export const DiscoverWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 12px;
    justify-content: center;

`

export const DiscoverRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    

    @media screen and (max-width:768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 0;
    padding-bottom: 0px;
`

export const DiscoverHeader = styled.h1`
    font-size: 48px;
    font-weight: 600;
    padding-top: 60px;
    padding-bottom:0px;
    margin-bottom: 0;
    @media screen and (max-width:1100px){
        font-size: 7.5vw;
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

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;


    @media screen and (max-width:1100px){
        height: 50%;
    }
`