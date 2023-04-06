import { Button, createStyles } from "@mui/material";
import './cbtn.css'
import { useEffect } from "react";
import { DarkTheme } from "../../../Themes/DarkTheme";
const buttonStyles = {
    "&.MuiButton-contained": {
      // background:  `${DarkTheme.palette.primary.main}!important`,
    },
  };
const CButton= () =>{
   
    return(
        <>
         <Button className="cbtn" variant='contained' href='/' sx={buttonStyles}>
            Read More
        </Button>
        </>
    )
}
export default CButton;