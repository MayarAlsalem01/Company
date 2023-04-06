

import { createRef, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Slider from '../../Components/Slider/Slider';

import './hero.css'
const heroRef=createRef<HTMLDivElement>()
const Hero = () => {
    useEffect(()=>{
        setTimeout(() => {
            if(heroRef.current){

                heroRef.current.style.translate='0'
            }
        }, 500);
    },[])
    return (
        <>
            <div ref={heroRef} className="hero hero_area">
            
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

            </div>

        </>
    );
}
export default Hero;