import { Link } from "@mui/material"
import { DarkTheme } from "../../../Themes/DarkTheme"
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
interface Props {
    children: ReactNode;
    // other props
  }
  
const Clinks = ( props:Props )=>{
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    return(
        <Link  sx={{
            textDecoration:"none",
            color:'#fff',
            fontSize:'18px',
            ":hover":{
                color:'#fff'
            }
        }} 
        style={{
            color:'#fff'
        }}
        className={isRtl ? "nav-link dropdown-toggle pe-3":"nav-link dropdown-toggle pe-5"} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.children}
        </Link>
    )
}
export const Clink = (props:Props)=>{
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    return(
        <Link sx={{
            textDecoration:"none",
            fontSize:'18px',
            color:'#fff',
            ":hover":{
                color:'#fff'
            }
            
        }} 
        style={{
            color:'#fff'
        }}
        className={isRtl ? "nav-link active pe-3":"nav-link active pe-5"} aria-current="page" href="#">{props.children}</Link>
    
    )
}

export default Clinks;