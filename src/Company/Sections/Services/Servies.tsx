import Serv from "../../Components/Serv/Serv"
import ImageServ from '../../images/welcome.png'
import ImageServ2 from '../../../Asset/Coding2.png'
import ImageServ3 from '../../images/s-2.jpg'
import './services.css'
import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import { DarkTheme } from "../../../Themes/DarkTheme"
import 'aos/dist/aos';
import { useEffect } from "react"
import Heading from "../../Components/Heading/Heading"

const Services = () => {
  
    return (
        <>
            <Box  className="services"  sx={{
                backgroundColor:'#f3f3f3'
            }}>
                <Box className="container-sm pt-1">
                    <div>
                    
                        <Heading title="What We Offer" caption="Your Dreams, Our Solutions" />
                    
                    
                    <div className="services-box">
                        <Serv header="Web Dev" image={ImageServ} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/>
                        <Serv header="Web Dev" image={ImageServ2} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/> 
                        <Serv header="Web Dev" image={ImageServ3} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/>
                        
                    </div>
                    </div>
                    
                </Box>
            </Box>
        </>
    );
}
export default Services