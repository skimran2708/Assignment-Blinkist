import { Typography } from "@mui/material";
import React from "react";

type textProps={
    text:string
    variant:"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit"
    fontSize?:number
    fontWeight?:number
}

function Text(props:textProps){
    return(
        <>
        <Typography variant={props.variant} sx={{fontSize:props.fontSize, fontWeight:props.fontWeight}}>{props.text}</Typography>
        </>
    )
}

export default Text;