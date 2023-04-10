import styled from "@emotion/styled";
import Image1 from '../../images/s-1.jpg'
import './serv.css'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { faCode, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkTheme } from "../../../Themes/DarkTheme";

interface Props {
    header: string;
    content: string;
    image: string
}

const Serv = (prop: Props) => {


    return (
        <>


            <Box className='serv-box' data-aos="fade-up"data-aos-anchor-placement="top-bottom" data-aos-delay="500" sx={{
                flexBasis: 'calc((100% / 3 ) - 40px )',
                boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px',
                border: `solid 1px ${DarkTheme.palette.divider}`,
                textAlign: 'center',
                borderRadius:'10px',
                position: 'relative',
                backgroundColor:'#fff',
                
                
                // ":hover .services-icons":{
                //     border: `solid 3px #000`,
                    
                //     transform:'translate(-50%) rotate(180deg)'
                // },
                

            }}>
                <Box className="services-icons" sx={{
                    backgroundColor: DarkTheme.palette.primary.dark,
                    width: 'fit-content',
                    margin: '0px auto',
                    zIndex:'2',
                    padding: '45px',
                    borderRadius: '10px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%) rotate(45deg)',
                    transition: 'all .5s',
                    top: '-16%', ":hover ": {
                        border: `solid 3px #000`,
                        transform:'translate(-50%) rotate(360deg) '
                    },
                    ":hover svg ": {
                        
                        transform:'rotate(405deg) '
                    },
                }}>
                    <Box sx={{
                        transform:'rotate(-45deg)'
                    }}>
                    <FontAwesomeIcon  fontSize='32px' icon={faCode} color="white" />
                    </Box>
                </Box>
                <Box className="serv-detail" sx={{
                    padding: '130px 30px 10px',
                    transform: 'none',
                    zIndex:'1',
                    transition:'all .5s',
                    position:'relative',
                ":after": {
                   
                    backgroundColor:DarkTheme.palette.primary.light,
                    zIndex:'-1'
                },
                ":hover":{
                    color:"#fff"
                },
                }}>
                    <h3>{prop.header}</h3>
                    <p>{prop.content}</p>
                </Box>
            </Box>

        </>
    );
}
export default Serv;