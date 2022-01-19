import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const useStyles = {
    inactiveTab:{
        alignItems:'baseline',
        fontSize:'16px',
        fontWeight:'400',
        height:'20px',
        width:'200px',
        padding:'0px 0px 16px 0px',
        textTransform:'unset'
    },
    activeTab:{
        alignItems:'baseline',
        fontSize:'16px',
        fontWeight:'400',
        height:'20px',
        width:'200px',
        padding:'0px 0px 16px 0px',
        textTransform:'unset',
        color:'#03314B'
    },
    typo:{ 
        textAlign:'left', 
        color: "#03314B", 
        lineHeight:'20px', 
        width:'600px'}

}

const BookDetailsTab = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event:any, newValue:any) => {
        setSelectedTab(newValue);
    }

    return(
        <> 
        <Box sx={{ borderBottom: 1, borderColor: '#E1ECFC', width:'600px', marginBottom:'20px' }}>
            <Tabs value={selectedTab} onChange={handleChange} sx={{height:'36px', width:'600px'}}>
                <Tab label="Synopsis" sx={selectedTab===0 ? useStyles.activeTab : useStyles.inactiveTab} />
                <Tab label="Who is it for?" sx={selectedTab===1 ? useStyles.activeTab : useStyles.inactiveTab} />
                <Tab label="About the author" sx={selectedTab===2 ? useStyles.activeTab : useStyles.inactiveTab} />
            </Tabs>
        </Box>

        {selectedTab === 0 && 
            <Typography variant="body2" sx={useStyles.typo}>
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier's essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today's business world.
            </Typography>
        }
        {selectedTab === 1 && "Entrepreneurship Readers"}
        {selectedTab === 2 && "Jim Collins and Bill Lazier"}
        </>
    )
}

export default BookDetailsTab;