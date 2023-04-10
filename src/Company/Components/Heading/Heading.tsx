import { Box, Typography } from "@mui/material";
import { DarkTheme } from "../../../Themes/DarkTheme";
import './heading.css'
interface Props {
    title: string;
    caption?: string;
}
const Heading = (props: Props) => {
    return (
        <>
            <Box className="heading" sx={{
                position: 'relative',
                margin: '0px auto 40px auto',
                textAlign: 'center',
                width: 'fit-content',
                ":after": {
                    backgroundColor: DarkTheme.palette.primary.main
                }

            }}  >
                <Typography variant="body1" sx={{ color: DarkTheme.palette.text.secondary }}>{props.caption}</Typography>
                <Typography variant="h2" sx={{
                    fontWeight: 'bold',
                }}>
                    {props.title}
                </Typography>
            </Box>

        </>

    );
}
export default Heading;