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
                <HomeP>Full Stack Software Engineer and other stuff about me to put here!</HomeP>
                <HomeBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
