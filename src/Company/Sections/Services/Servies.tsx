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

const Services = () => {
  
    return (
        <>
            <div className="services" data-aos="zoom-out-down">
                <div className="container-sm">
                    <div>
                    <Box className="services-heading" sx={{
                        position:'relative',
                        margin: '128px auto',
                        textAlign: 'center',
                        width:'fit-content',
                        ":after":{
                            backgroundColor:DarkTheme.palette.primary.main
                        }
                        
                    }}>
                        <Typography variant="h2" sx={{
                            fontWeight:'bold',
                        }}>
                            What We Offer
                        </Typography>
                        <Typography variant="body1" sx={{color:DarkTheme.palette.text.secondary}}>Your Dreams, Our Solutions</Typography>
                    </Box>
                    <div className="services-box">
                        <Serv header="Web Dev" image={ImageServ} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/>
                        <Serv header="Web Dev" image={ImageServ2} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/> 
                        <Serv header="Web Dev" image={ImageServ3} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam exercitationem tenetur ratione consectetur nesciunt porro ad cum soluta. Unde at, laborum sunt veritatis non illum exercitationem iure ipsa tempore!"/>
                        
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Services