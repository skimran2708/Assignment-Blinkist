import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const useStyles = {
    container:{
        height:'20px',
        alignItems:'center'
    },

    dropDownIcon:{
        color:'#042330',
        height:'6.48px',
        width:'10.61px',
    },

    typo:{
        lineHeight:'20px',
        color:'#03314B',
        fontWeight:'500'
    }
}

type navProps = {
    name: string,
    icon?: boolean
}

function NavItem(props: navProps) {

    const [isOpen, setModal] = useState(false)

    const openExploreMenu=()=>{
        setModal(!isOpen)
    }

    console.log(props.name,isOpen)

    var dropDown: any;
    if(props.icon) {
        if(isOpen) {
            dropDown = (
                <IconButton sx={useStyles.dropDownIcon} onClick={openExploreMenu}>
                    <KeyboardArrowUpIcon sx={{width:'20px', height:'20px'}} />
                </IconButton>
            );
        }
        else {
            dropDown = (
                <IconButton sx={useStyles.dropDownIcon} onClick={openExploreMenu}>
                    <KeyboardArrowDownIcon sx={{width:'20px', height:'20px'}}/>
                </IconButton>
            );
        }
    }
    return(
        <>
            <Grid container sx={useStyles.container}>
                <Grid item>
                    <Typography variant="body1" sx={useStyles.typo}>{props.name}</Typography>
                </Grid>
                <Grid item width='20px' height='20px' padding='0px'>
                    {dropDown}
                </Grid>
            </Grid>
        </>
    )
}

export default NavItem;