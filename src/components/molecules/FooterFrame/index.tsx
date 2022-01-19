import { Grid, Typography } from "@mui/material";
import logo from "../../../assets/images/BlinkistLogo.png";
import Image from "../../atoms/Image";
import NavSection from "../NavSection";
import React from "react";

const useStyles = {
    container:{
        width:'952px',
        height:'224px',
        alignItems:'flex-start',
        justifyContent:'space-between'
    },

    dropDownIcon:{
        color:'#042330',
        height:'6.48px',
        width:'10.61px',
    },

    typo:{
        textAlign:'left',
        lineHeight:'32px',
        color:'#0365F2',
    }
}

function FooterFrame() {
    return (
        <>
            <Grid container sx={useStyles.container}>
                <Grid item display='flex' width='378px' height='120px' flexDirection='column' justifyContent='space-between'>
                    <Grid item margin='0px' width='99.1px' height='24px' marginRight='32px'>
                        <Image name={logo} width={99.1} height={24}/>
                    </Grid>
                    <Grid item width='378px' height='64px'>
                        <Typography variant="subtitle1" sx={useStyles.typo}>Big ideas in small packages<br/> Start learning now</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <NavSection />
                </Grid>
            </Grid>
        </>
    )
}

export default FooterFrame;