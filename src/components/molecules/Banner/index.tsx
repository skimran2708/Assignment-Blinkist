import { Grid, SxProps, Typography } from "@mui/material";
import reader from "../../../assets/images/Reader.png";
import Image from "../../atoms/Image";

const useStyles:SxProps = {
    container:{
        width:'912px',
        height:'264px',
        padding:'45px',
        backgroundColor:'#F1F6F4',
        justifyContent:'space-between'
    },

    heading1:{
        color:"#03314B",
        textAlign:"left",
    },

    subtitle2:{
        color:"#6D787E",
        textAlign:"left",
        fontWeight:'normal'
    }
}


const Banner = () => {
    return(
        <>
            <Grid container sx={useStyles.container}>
                <Grid item display='flex' flexDirection='column' justifyContent="space-between" height="174px">
                    <Grid item width='319px' height="90px">
                        <Typography variant="h1" sx={useStyles.heading1}>Explore Books on entrepreneurship</Typography>
                    </Grid>
                    <Grid item width='461px' height="69px">
                        <Typography variant="subtitle2" sx={useStyles.subtitle2}>Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.</Typography>
                    </Grid>
                </Grid>
                <Grid item marginTop='-28px'>
                    <Image name={reader} />
                </Grid>
            </Grid>
        </>
    )
}

export default Banner;