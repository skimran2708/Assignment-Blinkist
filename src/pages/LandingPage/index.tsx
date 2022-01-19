import { Grid, Typography } from "@mui/material";
import TabsBar from "../../components/molecules/TabsBar";
import React from "react";

const styles = {
    container:{
        flexDirection:'column',
        width:'1440px',
        padding:'59px 264px 0px 264px'
    },

    typo:{
        color:'#03314B',
        textAlign:'left'
    }
}

const LandingPage = () => {
    return(
        <>
            <Grid container sx={styles.container}>
                <Grid item marginBottom='60px'>
                    <Typography variant="h1" sx={styles.typo}>My Library</Typography>
                </Grid>
                <Grid item>
                    <TabsBar />
                </Grid>
            </Grid>
        </>
    )
}

export default LandingPage;