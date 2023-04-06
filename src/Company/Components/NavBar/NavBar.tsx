import { useTranslation } from "react-i18next";
import './navbar.css'
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { DarkTheme } from "../../../Themes/DarkTheme";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../Asset/codelinelogononame.png'
import Clinks, { Clink } from "../Link/CLink";
import { createRef } from "react";
const NavBar = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    function changeLanguage(lang: string) {
        i18n.changeLanguage(lang);
        ulRef.current?.classList.remove('show');
    }
    const ulRef=createRef<HTMLUListElement>()
    return (

        <Box sx={{backgroundColor:'transparent'}}>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logo d-flex  me-1">
                    <a className="navbar-brand mx-1 " href="/" style={{
                        color:DarkTheme.palette.text.primary,
                        
                    }}><img src={Logo} alt="logo" style={{
                        width:'48px'
                    }}/>
                    </a>
                    <Typography variant="caption" sx={{color:'#fff'}}>CodeLines</Typography>
                    </div>
                    <IconButton 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    sx={{color:'#fff'}}
                    >
                    <MenuIcon fontSize="large"/>
                    </IconButton>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Clink>{t('navbar.home')}</Clink>
                            </li>
                            <li className="nav-item">
                                <Clink>{t('navbar.about')}</Clink>
                            </li>
                            <li className="nav-item">
                                <Clink>{t('navbar.contact')}</Clink>
                            </li>
                            <li className="nav-item dropdown">
                                <Clinks >
                                    {t('language')}
                                </Clinks>
                                <ul ref={ulRef} className="dropdown-menu" id="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Typography variant="caption" onClick={() => changeLanguage('ar')} className="lang-btn ms-2">العربية</Typography></li>
                                    <li><Typography variant="caption" onClick={() => changeLanguage('en')} className="lang-btn ">English</Typography></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                         
                            {/* <li className="nav-item">
                                <Link sx={{
                                    textDecoration:"none",
                                    ":hover":{
                                        color:DarkTheme.palette.primary.light
                                    }
                                }} className="nav-link disabled" href="#" aria-disabled="true">Disabled</Link>
                            </li> */}
                            
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Button variant="contained"  type="submit">Search</Button>
                        </form> */}
                    </div>
                </div>
            </nav>
            
               
        </Box>
    )
}
export default NavBar
