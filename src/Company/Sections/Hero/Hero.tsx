

import { createRef, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';

import './hero.css'
import styled from '@emotion/styled';
const HeroDiv = styled.div`
    transform: translate(100%);
    transition: all .3s;
`
const heroRef=createRef<HTMLDivElement>()
const Hero = () => {
    useEffect(()=>{
        setTimeout(() => {
            if(heroRef.current){

                heroRef.current.style.transform='translate(0)'
            }
        }, 500);
    },[])
    return (
        <>
            <HeroDiv ref={heroRef} className="hero hero_area">
            
                <header className="header_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <NavBar />
                            </div>
                        </div>
                    </div>
                </header>
                <Slider/>

            </HeroDiv>

        </>
    );
}
export default Hero;