import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./language/i18n";
import { Box } from "@mui/material";
import { DarkTheme } from "../Themes/DarkTheme";

import './css/style.css'
import'./css/responsive.css'
import Hero from "./Sections/Hero/Hero";
import Main from "./Sections/Main/Main";

const Company = () =>{
    
    return(
        <>
            <I18nextProvider i18n={i18n} >
                
                    <Hero/>
                <Main/>
                
            </I18nextProvider>
        </>
    );
}
export default Company;