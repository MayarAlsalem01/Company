import { TextField } from "@mui/material";
type Variant = 'filled' | 'outlined' | 'standard';
interface Props{
    variant : Variant;
}
const TextFieldMui = (props:Props)=>{
    return(
        <>
            <TextField variant={props.variant}></TextField>
        </>
    );
}
export default TextFieldMui;