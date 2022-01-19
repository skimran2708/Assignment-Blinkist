import { Grid, Typography } from "@mui/material";
import FooterFrame from "../../molecules/FooterFrame";
import React from "react";

const useStyles = {
    container:{
        width:'1440px',
        height:'370px',
        alignItems: 'center',
        padding:'38px 244px',
        background:'#F1F6F4',
        justifyContent: 'space-between',
    },

    item1:{
        height: '224px',
        flex: 'none',
        order: '0',
    },

    item2:{
        height: '22px',
        order: '1',
        textAlign:'left',
        marginRight:'auto'
    },

    style:{
        fontStyle:'normal',
        fontSize:'14px',
        fontWeight:'normal',
        lineHeight:'22px',
        color:'#6D787E',
        textAlign:'left'
    }
}

const Footer = () => {
    return (
        <>
            <Grid container flexDirection='column' sx={useStyles.container}>
                <Grid item sx={useStyles.item1}>
                    <FooterFrame />   
                </Grid>
                <Grid item sx={useStyles.item2}>
                    <Typography variant="caption" sx={useStyles.style} >
                        &copy; Blinkist 2021 Sitemap&emsp;|&emsp;Imprint&emsp;|&emsp;Terms of Service&emsp;|&emsp;Privacy Policies
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;