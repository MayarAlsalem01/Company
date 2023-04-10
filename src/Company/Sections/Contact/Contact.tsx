import { Box, Button, TextField, TextareaAutosize, Theme,  } from '@mui/material';
import './contact.css'
import Heading from '../../Components/Heading/Heading';

import styled from "@emotion/styled";
import { DarkTheme } from '../../../Themes/DarkTheme';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme:Theme)=>({
    textField:{
        '& .MuiInputBase-root':{
            borderRadius:'50px',
        }
    }
}))

const Contact = () => {
    const classes = useStyles();
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
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <TextField className={classes.textField} id="email" label="Email" variant="outlined" sx={{
                                flex: '1',
                            }} />
                            <TextField className={classes.textField} id="Name" label="Name" variant="outlined" sx={{ flex: '1' }} />

                        </Box>
                        <TextField 
                            placeholder="Message"
                            multiline
                            rows={2}
                            maxRows={8}
                            sx={{
                                width: '100%',

                            }}
                        />
                    </form>
                </Box>
            </Box>
        </Box>
    )
}
export default Contact;