import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HomeContainer, HomeBG, VideoBG, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import {Button} from '../ButtonElement'


const HomeSection = () => {
    const [hover, setHover]= useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HomeContainer id="home">
            <HomeBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBG>
            <HomeContent>
                <HomeH1>Wilson Gauf</HomeH1>
                <HomeP>Full Stack Software Engineer</HomeP>
                <HomeBtnWrapper>
                    <Button to="about" 
                    smooth={true} duration={900} spy={true} exact='true' offset={-80}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    >
                        Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
