import { SxProps, Typography } from "@mui/material";
import React from "react";

const typo:SxProps = {
    fontWeight:"normal",
    color: '#6D787E',
    margin:'16px 0px',
    textAlign: 'left'
}

type navProps = {
    text: string
}

function FooterItem(props: navProps) {
    return(
        <>
        <Typography variant="body1" sx={typo}>
            {props.text}
        </Typography>
        </>
    )
}

export default FooterItem;