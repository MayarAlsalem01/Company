import { Box, Button, TextField, TextareaAutosize } from '@mui/material';
import './contact.css'
import Heading from '../../Components/Heading/Heading';

import styled from "@emotion/styled";
import { DarkTheme } from '../../../Themes/DarkTheme';
const TextArea = styled.textarea`
    padding: 10px 20px ;
    height: 200px;
    width: 100%;
    border-color:${DarkTheme.palette.divider};
    border-radius: 5px;
    transition: all .5s;
   
    :focus{
        border-color: ${DarkTheme.palette.primary.main};
        outline: solid 1px ${DarkTheme.palette.primary.main};
        border-radius: 5px;
    }
`

const Contact = () => {
    return (
        <Box sx={{ padding: '60px 0 ' }} className='contact container-sm' >
            <Heading title='Contact us' caption='How can you communicate?' />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                {/* contact form */}
                <Box sx={{
                    width: '50%',
                    
                }} className='container-sm form mayar' >
                    <form action="" >
                        <Box className='input-group' sx={{
                            display: 'flex',
                            gap: '10px',
                            marginBottom: '20px'
                        }}>
                            <TextField id="email" label="Email" variant="outlined" sx={{
                                 flex: '1', 
                                 
                                 }} />
                            <TextField id="Name" label="Name" variant="outlined" sx={{ flex: '1' }} />

                        </Box>
                        <TextField
                            placeholder="Message"
                            multiline
                            rows={2}
                            maxRows={8}
                            sx={{
                                width:'100%',
                               
                            }}
                        />
                    </form>
                </Box>
            </Box>
        </Box>
    )
}
export default Contact;