import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../TabPanel";

const useStyles = {
    inactiveTab:{
        alignItems:'baseline',
        textTransform:'unset',
        fontSize:'18px',
        fontWeight:'700',
        width:'304px',
        height:'39px',
        padding:'0px 0px 16px 0px',
    },

    activeTab:{
        alignItems:'baseline',
        textTransform:'unset',
        fontSize:'18px',
        fontWeight:'400',
        width:'304px',
        height:'39px',
        padding:'0px 0px 16px 0px',
    }

}

const TabsBar = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [bool,setbool]=useState(false);

    const handleChange = (event:any, newValue:any) => {
        setSelectedTab(newValue);
        setbool(!bool);
    }

    return(
        <>
        <Box sx={{ borderBottom: 1, borderColor: '#E1ECFC', width:'912px' }}>
            <Tabs value={selectedTab} onChange={handleChange} sx={{height:'39px'}}>
                <Tab label="Currently reading" sx={bool===true ? useStyles.activeTab : useStyles.inactiveTab} />
                <Tab label="Finished" sx={bool===false ? useStyles.activeTab : useStyles.inactiveTab} />
            </Tabs>
        </Box>

        <TabPanel value={selectedTab} />
        </>
    )
}

export default TabsBar;