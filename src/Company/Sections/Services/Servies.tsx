import Serv from "../../Components/Serv/Serv"
import ImageServ from '../../images/s-1.jpg'
import ImageServ2 from '../../images/s-2.jpg'
import ImageServ3 from '../../images/s-3.jpg'
import './services.css'
const Services = () => {
    return (
        <>
            <section className="service_section">
                <div className="container test">
                    <div className="custom_heading-container">
                        <h2>
                            Our Services
                        </h2>
                    </div>
                    <div className="service_container layout_padding2">
                        <Serv headert="Business" headerb="Consultant" image={ImageServ}
                        content=" have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                        slightly believable. If you are"
                        />
                         <Serv headert="Marketing" headerb="Analytics" image={ImageServ2}
                        content="have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                        slightly believable. If you are"
                        />
                         <Serv headert="Financial" headerb="Planning" image={ImageServ3}
                        content="  have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even
                        slightly believable. If you are"
                        />
                        
                       
                       
                    </div>
                    <div>
                        <a href="">
                            Read More
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Services