import { Grid } from "@mui/material";
import React, { useState } from "react";
import ExploreBar from "../../molecules/Explore/ExploreBar";
import ExploreList from "../../molecules/Explore/ExploreList";

const styles = {
    container:{
        position:'absolute',
        top:'86px',
        background: '#F1F6F4',
        width:'1440px',
        height:'398px',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '30px 250px',
        zIndex:1000
    },

    overlay:{
        position:'absolute',
        top:'86px',
        bottom:0,
        right:0,
        left:0,
        height:'auto',
        backgroundColor:'rgba(157, 163, 166, 0.45)',
        zIndex:1000
    },

    selected:{
        alignText: 'left', 
        margin:'0px',
        color: '#116BE9',
        fontSize: '16px',
        height:'20px',
        fontWeight:'bold',
        lineHeight:'20px',
        textTransform:'unset',
        padding:'0px'
    },
    unselected:{
        alignText: 'left',
        margin:'0px',
        color: '#6D787E',
        fontSize: '16px',
        height:'20px',
        fontWeight:500,
        lineHeight:'20px',
        textTransform:'unset',
        padding:'0px'
    }
}

const ExploreMenu = ({open}:any) => {

    const [tabId, setTabId] = useState("1")

    const handleTab = (tab:string) => {
        setTabId(tab)
    }

    if(!open) return null

    return(
        <>
        <Grid sx={styles.overlay}/>
        <Grid container sx={styles.container}>
            <Grid item>
                <ExploreBar list={handleTab} />
            </Grid>
            <Grid item>
                <hr style={{border:'1px solid #042330', width:'940px'}}/>
            </Grid>
            <Grid item>
                <ExploreList open={tabId} />
            </Grid>
        </Grid>
        </>
    )
}

export default ExploreMenu;