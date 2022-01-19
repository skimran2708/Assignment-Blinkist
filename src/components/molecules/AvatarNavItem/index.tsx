import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, IconButton, SxProps } from "@mui/material";
import AvatarIcon from "../../atoms/Avatar";

const useStyles:SxProps = {
    dropDownIconAvatar:{
        color:'#042330!important',
        height:'6.48px!important',
        width:'10.61px!important',
        padding:'0px!important',
    },

    container: {
        display:'flex!important',
        width:'62px!important',
        height:'40px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}

type avatarProps = {
    user:string
}

const AvatarNavItem = (props:avatarProps)=> {
    return(
        <>
            <Grid container sx={useStyles.container}>
                <Grid item>
                    <AvatarIcon letter={props.user} />
                </Grid>
                <Grid item padding='0px'>
                    <IconButton sx={useStyles.dropDownIconAvatar}>
                        <KeyboardArrowDownIcon sx={{width:'20px', height:'20px'}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

export default AvatarNavItem;