import { Grid } from "@mui/material";
import Banner from "../../components/molecules/Banner";
import Blinks from "../../components/molecules/Blinks";
import SearchBar from "../../components/organisms/SearchBar";
import React from "react";

const styles = {
    container:{
        flexDirection:'column',
        width:'1440px',
        padding:'32px 264px 76px 264px',
        alignItems:'flex-start'
    },

    typo:{
        color:'#03314B',
        textAlign:'left'
    }
}

const EntrepreneurshipPage = () => {
    return(
        <>
            <Grid container sx={styles.container}>
                <Grid item paddingBottom='58px'>
                    <Banner/>
                </Grid>
                <Grid item>
                    <SearchBar />
                </Grid>
                    <Blinks />
            </Grid>
        </>
    )
}

export default EntrepreneurshipPage;