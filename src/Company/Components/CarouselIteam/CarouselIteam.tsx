
import styled from '@emotion/styled';
import SilderImage from '../../images/slider-img.png'
import CButton from '../ButtonLink/ButtonLink';
import './carousel.css'
interface Props {
    active: boolean
}
const StyledImage=styled.img`

    animation-name: moving;
    
    animation-duration: 1.5s;
    
    animation-iteration-count: infinite;
    
    animation-timing-function: linear;
    
    animation-direction: alternate;
    
    animation-delay: 2s;
    @keyframes moving {
    0% {
        
        transform: translate(-25px);
    }
    100% {
        
        transform: translate(25px);
    }
}
`
const CarouselIteam = (props: Props) => {
    return (
        <>
            <div className={props.active ? "carousel-item active " : "carousel-item "}>
                <div className="container-sm">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="slider_detail-box">
                                <h1

                                >


                                    Start <br />
                                    Business with <br />
                                    Our Company

                                </h1>
                                <p>
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi
                                </p>
                                <div className="btn-box">
                                    <CButton />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="slider_img-box">
                                <StyledImage src={SilderImage} alt=""/>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CarouselIteam