import React from 'react'
import  img from '../../images/Wilson.jpg'
import resume from '../../images/Resume.jpg'
import { DiscoverContainer, DiscoverWrapper, DiscoverRow, Column1, Column2, ImgWrap, Img, DiscoverHeader, TextWrapper } from './DiscoverElements'
const Discover = () => {
    return (
        <>
            <DiscoverContainer id="discover">
                <DiscoverWrapper>
                    <TextWrapper>
                        <DiscoverHeader>Discover Wilson</DiscoverHeader>
                    </TextWrapper>
                    <DiscoverRow>
                        
                        <Column1>
                            <ImgWrap>
                                <Img src={resume} alt={'Photo of Wilson'} />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={'Photo of Wilson'} />
                            </ImgWrap>
                        </Column2>
                    </DiscoverRow>
                </DiscoverWrapper>
            </DiscoverContainer>  
        </>
    )
}

export default Discover
