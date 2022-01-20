import { Typography } from "@mui/material";
import React from "react";

const useStyles = {
    container:{
        height:'20px',
        alignItems:'center'
    },

    bold:{
        lineHeight:'20px',
        color:'#03314B',
        fontWeight:'500',
        textAlign:'left'
    },

    normal:{
        fontWeight:"normal",
        color: '#6D787E',
        margin:'16px 0px',
        textAlign: 'left'
    }
}

type navProps = {
    text: string,
    type: string
}

function NavItem(props: navProps) {
    return(
        <>
            <Typography variant="body1" sx={props.type==="bold" ? useStyles.bold : useStyles.normal}>{props.text}</Typography>
        </>
    )
}

export default NavItem;