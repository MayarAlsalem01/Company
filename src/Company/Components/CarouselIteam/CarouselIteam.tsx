
import SilderImage from '../../images/slider-img.png'
import CButton from '../ButtonLink/ButtonLink';
import './carousel.css'
interface Props {
    active: boolean
}
const CarouselIteam = (props: Props) => {
    return (
        <>
            <div className={props.active ? "carousel-item active " : "carousel-item "}>
                <div className="container">
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
                                <img src={SilderImage} alt=""/>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CarouselIteam